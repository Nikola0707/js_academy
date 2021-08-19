const SingleFile = require('../models/singlefile');
const MultipleFile = require('../models/multipleFiles');
const successResponse = require('../lib/handlers/success-response-sender');
const errorResponse = require('../lib/handlers/error-response-sender');

module.exports = {
  singleFileUpload: async (req, res, next) => {
    try {
      const file = new SingleFile({
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size
      });
      await file.save();
      successResponse(res, 'You have succesfully uploaded file', file);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  multipleFileUpload: async (req, res, next) => {
    try {
      let filesArray = [];
      req.files.forEach(file => {
        const files = {
          fileName: file.originalname,
          filePath: file.path,
          fileType: file.mimetype,
          fileSize: file.size
        }
        filesArray.push(files);
      });
      const multipleFiles = new MultipleFile({
        title: req.body.title,
        files: filesArray
      });
      await multipleFiles.save();
      successResponse(res, 'You have succesfully uploaded files', multipleFiles);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  getallSingleFiles: async (req, res, next) => {
    try {
      const files = await SingleFile.find();
      successResponse(res, 'List of all single files', files);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  getallMultipleFiles: async (req, res, next) => {
    try {
      const files = await MultipleFile.find();
      successResponse(res, 'List of all multiple files', files);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  deleteSingleFile: async (req, res) => {
    try {
      await SingleFile.remove({ _id: req.params.id });
      res.send(`File ${req.params.id} is deleted`);
    } catch (error) {
      res.send({ message: error });
    }
  },
  deleteMultipleFiles: async (req, res) => {
    try {
      await MultipleFile.remove({ _id: req.params.id });
      res.send(`File ${req.params.id} is deleted`);
    } catch (error) {
      res.send({ message: error });
    }
  }
}