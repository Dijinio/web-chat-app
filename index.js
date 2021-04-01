const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Express stuff
const userRoutes = require("./routes/users");
const chatRoomRoutes = require("./routes/chatRooms");
const auth = require("./middlewares/auth");

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/chatRooms", auth, chatRoomRoutes);

// Socket.io stuff
const {
  addUserToRoom,
  removeUserFromRoom,
  addMessageToRoom,
} = require("./controllers/chatRooms");
const socketAuth = require("./middlewares/socketAuth");
const BOT_NAME = "Chat Bot";

io.on("connection", (socket) => {
  const { token, userprofile } = socket.handshake.headers;
  const user = JSON.parse(userprofile);

  // Authenticate user
  const authenticated = socketAuth(token, user);
  if (!authenticated) return false;

  socket.on("join", async (roomName) => {
    if (roomName && user._id) {
      const updatedRoom = await addUserToRoom(roomName, user);

      socket.emit("botMessage", {
        user: BOT_NAME,
        text: `Welcome to the room ${roomName}`,
      });

      socket.broadcast.to(roomName).emit("botMessage", {
        user: "chat",
        text: `${user.name} has joined the room`,
      });

      // Join room
      socket.join(roomName);
      // Send updated room object to front-end
      io.to(roomName).emit("updateRoom", { updatedRoom });
    }
  });

  socket.on("sendMessage", async ({ roomName, message }) => {
    const updatedRoom = await addMessageToRoom(roomName, message, user);

    // Send updated room object to front-end
    io.to(roomName).emit("updateRoom", { updatedRoom });
  });

  socket.on("disconnect", async () => {
    const updatedRoom = await removeUserFromRoom(user);

    if (updatedRoom) {
      socket.broadcast.to(updatedRoom.name).emit("botMessage", {
        user: BOT_NAME,
        text: `${user.name} has left the chat`,
      });

      // Send updated room object to front-end
      io.to(updatedRoom.name).emit("updateRoom", { updatedRoom });
      socket.disconnect();
    }
  });
});

// Set static if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    http.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
