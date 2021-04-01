const ChatRoom = require("../models/ChatRoom");

// Api
const getChatRoom = async (req, res) => {
  const { name } = req.params;

  if (name) {
    try {
      const result = await ChatRoom.findOne({ name: name });
      if (result) {
        res.status(200).json({ result });
      } else {
        res.status(404).json({ message: "Room not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const getRoomNames = async (req, res) => {
  try {
    const result = await ChatRoom.find({}, "name").exec();
    const rooms = result.map((room) => room.name);
    res.status(200).json({ rooms });
  } catch (error) {
    console.log(error);
  }
};

// Socketio
const addUserToRoom = async (roomName, user) => {
  try {
    const room = await ChatRoom.findOne({ name: roomName });

    // Join if room exists
    if (room) {
      const exists = room.users.find((u) => String(u._id) === user._id);
      if (!exists) {
        room.users.push(user);
      }
      const updatedRoom = await ChatRoom.findByIdAndUpdate(room.id, room, {
        new: true,
      });
      return updatedRoom;
    } else {
      // Create new room
      const newRoom = await ChatRoom.create({
        name: roomName,
        users: [user],
      });

      return newRoom;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeUserFromRoom = async (user) => {
  try {
    const room = await ChatRoom.findOne({ "users._id": user._id });

    if (room) {
      const index = room.users.findIndex((u) => String(u._id) === user._id);
      room.users.splice(index, 1);

      const updatedRoom = await ChatRoom.findByIdAndUpdate(room.id, room, {
        new: true,
      });

      return updatedRoom;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const addMessageToRoom = async (roomName, message, user) => {
  try {
    const room = await ChatRoom.findOne({ name: roomName });

    const newMessage = { user, body: message };

    if (room) {
      room.messages.push(newMessage);
    }

    const updatedRoom = await ChatRoom.findByIdAndUpdate(room.id, room, {
      new: true,
    });

    return updatedRoom;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getChatRoom,
  getRoomNames,
  addUserToRoom,
  removeUserFromRoom,
  addMessageToRoom,
};
