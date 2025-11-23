require("dotenv").config();

const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create(req.body);
    const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });

    res.status(200).json({
      success: false,
      token,
      data: [user],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not create a user",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
    return  res.status(400).json({
        success: false,
        message: "user does not exists with these provided email & password",
      });
    }
    if (password !== user.password) {
      return res.status(400).json({
        success: false,
        message: "password is incorrect",
      });
    }
    //generate jwt
    const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });

    res.status(201).json({
      success: true,
      token,
      data: [user],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  signIn,
};
