var mongoose = require("mongoose");

var regionSchema = mongoose.Schema({
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
  },
  number: {
    type: String,
  }
});

module.exports = mongoose.model("Region", regionSchema);