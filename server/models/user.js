const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  disability: {
    type: String,
    required: true,
  },
  interestedJob: {
    type: String,
    // required: true,
  },

  searchHistory: [String],
});

module.exports = new mongoose.model("User", UserSchema);
