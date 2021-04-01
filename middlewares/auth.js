const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const { userid } = req.headers;
    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedData.id === userid) {
        req.userid = decodedData?.id;
      } else {
        throw "Invalid user ID!";
      }
    } else {
      return res.status(404).json({ message: "Not authenticated" });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
