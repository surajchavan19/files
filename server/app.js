const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

const Image = require("./models/image");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

app.post("/upload", async (req, res) => {
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
        const savedImage = await image.save();
        req.status(200).send(savedImage);
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

app.listen(3000, (req, res) => {
  console.log("server started");
});
