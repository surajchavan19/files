const mongoose = require("mongoose");

const UserSchemaBlog = new mongoose.Schema({
  authorId: Number,
  authorName: String,
  Title: String,
  Genre: String,
  date: { type: Date, default: Date.now },
  content: String,
});

module.exports = new mongoose.model("UserBlog", UserSchemaBlog);
