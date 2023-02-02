const mongoose = require("mongoose");

const UserAddJob = new mongoose.Schema({
  Title: String,
  name: String,
  suggestions: String,
  rating: Number,
  openClients: Number,
  description: String,
  skills: String,
  nRatings: Number,
  profileImg: String,
});

module.exports = new mongoose.model("UserAddJob", UserAddJob);
