var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  phone: String,
});

module.exports = mongoose.model("User", userSchema);
