const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const socketAuth = (bearerToken, user) => {
  const token = bearerToken.split(" ")[1];

  try {
    let decodedData;

    if (token || user._id) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedData.id !== user._id) return false;
    } else {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = socketAuth;
