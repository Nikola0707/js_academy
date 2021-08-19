const BlogPost = require('../models/blog-post')
const Category = require('../models/category')
const successResponse = require('../services/success-response-sender');
const errorResponse = require('../services/error-response-sender');

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const categories = await Category.find();
      successResponse(res, 'List of all blog posts', categories);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  fetchOne: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) errorResponse(res, 400, 'No user with the provided id')
      
      successResponse(res, `Post with id #${req.params.id}`, category);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  create: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      successResponse(res, 'New blog post created', category);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  patchUpdate: async (req, res) => {
    try {
     const category =  await Category.findByIdAndUpdate(req.params.id, req.body)
     successResponse(res, 'Category updated', category);
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
      const category = await Category.findOneAndReplace({_id: req.params.id}, req.body)
      successResponse(res, 'Category updated', category);
    }catch (error){
      errorResponse(res, 500, {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  },
  delete: async (req, res) => {
    try {
      await Category.remove({ _id: req.params.id });
      res.send(`BlogPost ${req.params.id} is deleted`);
    } catch (error) {
      res.send({ message: error });
    }
  }
};