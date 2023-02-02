const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const ContentBasedRecommender = require("content-based-recommender");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
// const { canPromptTouchID, promptTouchID } = require("node-mac-auth");

const app = express();

const Image = require("./models/image");
const job = require("./models/job");

const User = require("./models/user");
const UserAdd = require("./models/userAdd");
const UserBlog = require("./models/userBlog");
const report = require("./models/report");
const qrcode = require("qrcode-terminal");
let id = "";
const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});
client.on("message", async (message) => {
  let query = message.body;
  console.log(message);
  if (message.author == "918928106363@c.us" && query == "jobs") {
    console.log(query);
    const data = await User.findById(id.toHexString());
    console.log("-->", id);
    console.log("------->", data);

    const options = {
      method: "POST",
      url: "https://all-serp.p.rapidapi.com/all-serp-website",
      params: {
        keyword: `Jobs with ${data.disability}`,
        location: "in",
        language: "en",
        search_engine: "google",
        page_limit: "1",
        search_type: "All",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "39361c27bcmsh5ee974ba887561fp1daf0ejsn528479110fab",
        "X-RapidAPI-Host": "all-serp.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };
    // console.log(options);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        response.data.local_results.forEach((ele) => {
          console.log(`${ele.title} ${ele.url_search}`);
          client.sendMessage(message.from, `${ele.title} ${ele.url_search}`);
        });
        // client.sendMessage(message.from, `${ele.title} ${ele.url_search}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else if (query == "schemes") {
    const data = await User.findById(id.toHexString());
    console.log("-->", id);
    console.log("------->", data);

    const options = {
      method: "POST",
      url: "https://all-serp.p.rapidapi.com/all-serp-website",
      params: {
        keyword: `Schemes with ${data.disability}`,
        location: "in",
        language: "en",
        search_engine: "google",
        page_limit: "1",
        search_type: "All",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "39361c27bcmsh5ee974ba887561fp1daf0ejsn528479110fab",
        "X-RapidAPI-Host": "all-serp.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };
    // console.log(options);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        response.data.organic_results.forEach((ele) => {
          console.log(`${ele.title} ${ele.url_search}`);
          client.sendMessage(message.from, `${ele.title} ${ele.url}`);
        });
        // client.sendMessage(message.from, `${ele.title} ${ele.url_search}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
});

client.initialize();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static("public"));

mongoose.connect(
  // "mongodb+srv://surajchavan19:zUf9H5kZ1tsN4FTB@cluster0.xkhwuil.mongodb.net/?retryWrites=true&w=majority",
  "mongodb://localhost:27017/hack",
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
    const newUser = new User({ ...req.body });
    await newUser.save();
    res.status(201).json({
      status: "success",

      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(500).json(err);
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
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "please provide email and password" });
    }

    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    if (user.email === email && user.password === password) {
      id = user._id;
      console.log(id);
      res.status(200).json({
        status: "success",
      });
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
app.get("/blogData", async (req, res) => {
  console.log(req);
  // const genre = req.body.genre;
  const genre = "horror";
  const blogReq = await blog.find({ Genre: genre });
  res.json(blogReq);
});
app.post("/addjob", async (req, res) => {
  let body = req.body;
  const data = new job({
    ...body,
  });
  const response = await data.save();
  res.json({ data: response });
});
app.get("/getjob", async (req, res) => {
  const result = await job.find({});
  res.json({ data: result });
});
app.post("/getjobbyid", async (req, res) => {
  const result = await job.findById(req.body.id);
  res.json({ data: result });
});
let result = [];
app.post("/filterjob", async (req, res) => {
  let id = req.body.id;
  let query = req.body.key;
  const update = await User.findOneAndUpdate(
    { _id: id },
    { $push: { searchHistory: query } },
    { new: true }
  );
  console.log(update);
  const result = await job.findOne({
    description: { $regex: query, $options: "i" },
  });
  res.json({ data: result });
});

app.post("/recommend", async (req, res) => {
  let id = req.body.id;
  let posts = [];
  job.find({}, (er, data) => {
    data.forEach((ele) => {
      let obj1 = {
        id: ele._id,
        content: ele.description,
      };
      posts.push(obj1);
    });
  });

  User.findById(id, async (er, data) => {
    let i = 0;
    if (er) console.log(er);
    else {
      let tags = [];
      // console.log(data.searchkey);
      data.searchHistory.forEach((ele) => {
        let obj = {
          id: i,
          content: ele,
        };
        i++;
        tags.push(obj);
      });
      const tagMap = tags.reduce((acc, tag) => {
        acc[tag.id] = tag;

        return acc;
      }, {});

      const recommender = new ContentBasedRecommender();

      recommender.trainBidirectional(posts, tags);

      for (const post of posts) {
        const relatedTags = recommender.getSimilarDocuments(post.id);
        const tags = relatedTags.map((t) => tagMap[t.id].content);
        console.log(post.content, "related tags:", tags);
        if (tags.length > 0) {
          const data = await job.findOne({ description: post.content });
          console.log("--> ", data);
          result.push(data);

          // res.json({})
        }
      }
    }
  });
});
app.get("/result", async (req, res) => {
  res.json({ data: result });
});
app.get("/users", async (req, res) => {
  const result = await User.findOne({});
  res.json({ data: result });
});

app.get("/serp", (req, res) => {});

//upload grievances
app.post("/report", async (req, res) => {
  const image = req.body.image;
  const title = req.body.title;
  const desc = req.body.title;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "onlineShop",
      });
      if (uploadRes) {
        const report_doc = new report({
          image: uploadRes,
          title: title,
          desc: desc,
        });
        const savedReport = await report_doc.save();
        res.status(200).send(savedReport);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(3000, (req, res) => {
  console.log("server started");
});
