const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  Salary: String,
  location: String,
  period: String,
  mode: String,
});

module.exports = new mongoose.model("job", jobSchema);
