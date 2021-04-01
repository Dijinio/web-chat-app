const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET;

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "Wrong user or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong user or password" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret
    );

    const result = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    };

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, secret);

    const result = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { signin, signup };
