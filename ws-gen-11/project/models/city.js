var mongoose = require("mongoose");

var citySchema = mongoose.Schema({
  name: {
    type: String,
    required: ['Please provide the name of the city']
  }
});

module.exports = mongoose.model("City", citySchema);