var mongoose = require("mongoose");

var categoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: ['Please provide the title of the category']
  }
});

module.exports = mongoose.model("Category", categoriesSchema);
