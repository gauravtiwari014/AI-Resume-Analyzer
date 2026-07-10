const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    console.log("REGISTER BODY:", req.body);

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    console.log("USER CREATED:", user);

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    console.log("LOGIN BODY:", req.body);

    const user = await User.findOne({ email });

    console.log("FOUND USER:", user);

    if (!user) {

      return res.status(400).json({
        message: "Invalid Credentials"
      });

    }

    const match = await bcrypt.compare(password, user.password);

    console.log("PASSWORD MATCH:", match);

    if (!match) {

      return res.status(400).json({
        message: "Invalid Credentials"
      });

    }

    res.json({

      success: true,

      token: generateToken(user._id),

      user

    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};