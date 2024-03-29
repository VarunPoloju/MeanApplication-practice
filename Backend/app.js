const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("../Backend/routes/posts");
const userRoutes = require("../Backend/routes/user")
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://varun:gandhinagar112233@cluster0.wr0ge.mongodb.net/Meanapp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection to db was successfull");
  })
  .catch("DB connection failed");

app.use(bodyParser.json()); //-> to parse req.payload , not for image files to parse
app.use(bodyParser.urlencoded({ extended: false }));

// access permission for images
app.use("/images", express.static(path.join("Backend/images")));

// to resolve CORS issue add this headers
app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.options("*", cors());

// to use all the routes
app.use("/api/posts", postRoutes);
app.use("/api/user",userRoutes)

module.exports = app;
