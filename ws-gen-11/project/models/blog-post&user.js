var mongoose = require("mongoose");

var blogPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: ['Please provide the title of the blog post']
  },
  content: {
    type: String,
    required: ['Please provide the content of the blog post']
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category'
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  likes: {
    type: Array,
    default: []
  },
  city: {
    type: mongoose.Types.ObjectId,
    ref: "City"
  }
});

var usersSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: ['Please provide the full name of the user']
  },
  email: {
    type: String,
    required: ['Please provide the email of the user']
  },
  password: {
    type: String,
    required: ['Please provide the password of the user']
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: []
  }
});

const blogPostModel = mongoose.model("BlogPost", blogPostSchema);
const userModel = mongoose.model("User", usersSchema)

module.exports = {
  blogPostModel,
  userModel
}

