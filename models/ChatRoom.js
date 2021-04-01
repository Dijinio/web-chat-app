const mongoose = require("mongoose");

const chatRoomSchema = mongoose.Schema({
  name: { type: String, required: true },
  users: [
    {
      _id: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
  messages: [
    {
      user: {
        _id: { type: String, required: true },
        name: { type: String, required: true },
      },
      body: { type: String, required: true },
      status: { type: String, default: "unread" },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;
