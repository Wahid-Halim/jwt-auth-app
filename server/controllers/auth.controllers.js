const User = require("../model/user.model");

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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  register,
};
