const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: {
    data: Buffer,
    contentType: String,
  },
  interests: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  followers: [],
});

export const User = mongoose.model("User", userSchema);
