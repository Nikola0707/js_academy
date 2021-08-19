const express = require("express");
const router = express.Router();
const User = require("./models/user");

router
  .get("/hehe", (req, res) => {
    res.send({
      message: "Stignavte na GET /hehe",
      x: "y",
      products: [4, 5, true, "hehe", [1, 2], { 5: 3 }],
    });
  })
  .get("/users", async (req, res) => {
    const users = await User.find();
    res.send({
      users: users,
    });
  })
  .post("/users", async (req, res) => {
    const user = new User(req.body);
    await user.save();

    res.send({
      user: user,
    });
  });

module.exports = router;
