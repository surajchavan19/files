const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const cors = require("cors");
// const { canPromptTouchID, promptTouchID } = require("node-mac-auth");

const app = express();

const Image = require("./models/image");
const User = require("./models/user");
const UserAdd = require("./models/userAdd");
const UserBlog = require("./models/userBlog");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://surajchavan19:zUf9H5kZ1tsN4FTB@cluster0.xkhwuil.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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

app.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User({...req.body});
    await newUser.save();

    console.log(newUser);
    res.json(newUser);
    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     user: newUser,
    //   },
    // });

  } catch (err) {
    res.status(500).json(err.message);
  }
});
app.post("/customJobPost", async (req, res) => {
  console.log(req.body);
  const createNewJob = new AddJob({
    Title: req.body.Title,
    name: req.body.Name,
    suggestions: req.body.suggestions,
    rating: req.body.rating,
    currentClients: req.body.currentClients,
    description: req.body.description,
    nRatings: req.body.nRatings,
    // profileImg: Image,
  });
  createNewJob
    .save()
    .then((response) => {
      res.json({
        message: "Job created sucessfully!",
      });
    })

    .catch((error) => {
      res.json({
        message: "An error has occured!",
      });
    });
});
app.post("/login", async (req, res) => {
 
  console.log(req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "please provide email and password" });
    }

    const user = await User.findOne({ email: email });
  
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    if (user.email === email && user.password === password) {
      console.log("user")
      // res.status(200).json({
      //   status: "success",
      // });
      res.json({status: "success",statusCode:200 })


    } else {
      return res.status(401).json({ message: "incorrect  email or password" });
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
//get return back response with user data
app.post("/jobs", async (req, res) => {
  const id = req.body.id;
  const data = await AddJob.findById(id);
  res.send(data);
});

//POST for adding a new blog entry
app.post("/newBlog", async (req, res) => {
  console.log(req.body);
  const newBlogData = new blog({
    authorId: req.body.authorId,
    authorName: req.body.authorName,
    Title: req.body.Title,
    Genre: req.body.Genre,
    content: req.body.content,
  });
  newBlogData
    .save()
    .then((response) => {
      res.json({
        message: "New blog created sucessfully!",
      });
    })

    .catch((error) => {
      res.json({
        message: "An error has occured!",
      });
    });
});
//to get blogs based on key(genre) filtering
app.post("/blogData", async (req, res) => {
  const genre = req.body.genre;
  // const genre = "horror";
  const blogReq = await blog.find({ Genre: genre });
  res.json(blogReq);
});

app.listen(4000, (req, res) => {
  console.log("server started");
});
