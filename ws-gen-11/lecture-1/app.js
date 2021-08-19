const express = require("express");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect("mongodb://localhost/healthcareapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", router);

app.listen("3000", (error) => {
  if (error) {
    return console.log(
      "Error happened while starting the app on port 3000: ",
      error
    );
  }
  console.log("Application successfully started on port 3000");
});
