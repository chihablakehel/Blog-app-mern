const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 4,
    max: 244,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 244,
  },
});

const User = model("User", UserSchema);

module.exports = User;
