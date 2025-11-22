require("dotenv").config();

const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const user = await User.create(req.body);
    res.status(200).json({
      success: false,
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
      res.status(400).json({
        success: false,
        message: "user does not exists with these provided email & password",
      });
    }
    //generate jwt
    const token = jwt.sign(
      { userid: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );

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
