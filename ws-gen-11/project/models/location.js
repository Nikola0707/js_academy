var mongoose = require("mongoose");

var locationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lat: {
    type: String,
    required: ['Please provide the latitude']
  },
  lon: {
    type: String, 
    required: ['Please provide the longitude']
  }
});

module.exports = mongoose.model("Location", locationSchema);