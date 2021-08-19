const express = require('express');
const { upload } = require('../../../lib/handlers/file-upload-helper');
const router = express.Router();
const controller = require('../../../controllers/upload');

router.post('/singleFile', upload.single('file'), controller.singleFileUpload)
      .post('/multipleFiles', upload.array('files'), controller.multipleFileUpload)
      .get('/getSingleFile', controller.getallSingleFiles)
      .get('/getMultipleFiles', controller.getallMultipleFiles)
      .delete('/single/:id', controller.deleteSingleFile)
      .delete('/multiple/:id', controller.deleteMultipleFiles)

module.exports = router