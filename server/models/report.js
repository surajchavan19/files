const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: Object,
    required: true,
  },
});

module.exports = new mongoose.model("Report", ReportSchema);
