const express = require("express");
const { getChatRoom, getRoomNames } = require("../controllers/chatRooms");

const router = express.Router();

router.get("/:name", getChatRoom);
router.get("/", getRoomNames);

module.exports = router;
