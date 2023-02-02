const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const cors = require("cors");
// const { canPromptTouchID, promptTouchID } = require("node-mac-auth");

const app = express();

const Image = require("./models/image");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/Images", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

cloudinary.config({
  cloud_name: "dfy3abzt0",
  api_key: "343664451281917",
  api_secret: "wMXPCBOc6XURqDJsmFC1rWft0TM",
});

app.post("/upload1", async (req, res) => {
  const image = req.body.image;
  console.log(image);

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "onlineShop",
      });
      if (uploadRes) {
        const photo = new Image({
          image: uploadRes,
        });
        const savedImage = await photo.save();
        res.status(200).send(savedImage);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/upload", async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).send(images);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/login", (req, res) => {
  res.send("hello");
});
// app.get("/", (req, res) => {

//   const canPrompt = canPromptTouchID();
//   const response1 = promptTouchID({
//     reason: "To get consent for a Security-Gated Thing",
//   })
//     .then(() => {
//       console.log("You have successfully authenticated with Touch ID!");
//     })
//     .catch((err) => {
//       console.log("TouchID failed because: ", err);
//     });
//   console.log(response1);
//   res.send("hello");
// });

app.listen(3000, (req, res) => {
  console.log("server started");
});
