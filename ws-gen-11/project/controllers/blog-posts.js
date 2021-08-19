const { blogPostModel } = require('../models/blog-post&user')
const successResponse = require('../lib/handlers/success-response-sender');
const errorResponse = require('../lib/handlers/error-response-sender');
const enrichBlogPost = require('../lib/enrichers/blogposts');
const sendMail = require('../lib/mails/mailgun');
const createPDF = require('../lib/pdf/pdf')
const path = require('path')

const generateEmailData = (blogPost, toEmail) => {
  const filepath = path.join(__dirname, `../pdfs/blogpost-${blogPost._id}.pdf`);
  return {
    from: "test@test.com",
    to: 'xeragus.code@gmail.com', //toEmail,
    subject:'Congratulations!',
    text:'Hello there! You have successfully created a blog post!',
    html: `<h1>Ws Gen 11</h1><h3>Ws Gen 11</h3>`,
    attachment: filepath
  };
}

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const blogPosts = await blogPostModel.find()
        .populate('category', 'name')
        .populate('user', ['email', 'full_name'])
        .populate('city', 'name')

      successResponse(res, 'List of all blog posts', blogPosts);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  fetchOne: async (req, res) => {
    try {
      let blogPost = await blogPostModel.findById(req.params.id)
        .populate('category', 'name')
        .populate('user', ['email', 'full_name'])
        .populate('city', 'name')

      if (!blogPost) errorResponse(res, 400, 'No user with the provided id');
      
      successResponse(res, `Post with id #${req.params.id}`, await enrichBlogPost(blogPost));
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  create: async (req, res) => {
    try {
      const blogPost = await blogPostModel.create(req.body);

      // The Callback Way
      // createPDF(blogPost, () => {
      //   sendMail(generateEmailData(blogPost, req.user.email));
      // });
      
      // The Promised Land
      await createPDF(blogPost);
      sendMail(generateEmailData(blogPost, req.user.email));

      successResponse(res, 'New blog post created', blogPost);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  patchUpdate: async (req, res) => {
    try {
      const blogPost = await blogPostModel.findByIdAndUpdate(req.params.id, req.body)
      successResponse(res, 'Blog post updated', blogPost);
    } catch (error) {
      errorResponse(res, 500, {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  },
  putUpdate: async (req, res) => {
    try {
      const blogPost = await blogPostModel.findOneAndReplace({ _id: req.params.id }, req.body)
      successResponse(res, 'Blog post replaced', blogPost);
    } catch (error) {
      errorResponse(res, 500, {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  },
  delete: async (req, res) => {
    try {
      await blogPostModel.remove({ _id: req.params.id });
      res.send(`BlogPost ${req.params.id} is deleted`);
    } catch (error) {
      res.send({ message: error });
    }
  },
  like: async (req, res) => {
    try {
      const post = await blogPostModel.findById(req.params.id);
      if (!post.likes.includes(req.user.id)) {
        await post.updateOne({ $push: { likes: req.user.id } });
        res.status(200).json("The post has been liked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  dislike: async (req, res) => {
    try {
      const post = await blogPostModel.findById(req.params.id);
      if (post.likes.includes(req.user.id)) {
        await post.updateOne({ $pull: { likes: req.user.id } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
}