const express = require("express");
const app = express();
const blogPostsRouter = require("./routers/blog-posts-router");
const categoriesRouter = require('./routers/categories-router')
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/blogposts", blogPostsRouter);
app.use("/categories", categoriesRouter)

app.listen("3000", (error) => {
  if (error) {
    return console.log(
      "Error happened while starting the app on port 3000: ",
      error
    );
  }
  console.log("Application successfully started on port 3000");
});
