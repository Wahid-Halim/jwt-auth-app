const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exists"],
    validate: {
      validator: function (value) {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Must at least 6 character"],
  },
});

module.exports = mongoose.model("User", userSchema);
