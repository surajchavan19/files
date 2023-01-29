const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image: {
    type: Object,
    required: true,
  },
});

module.exports = new mongoose.model("Image", ImageSchema);
