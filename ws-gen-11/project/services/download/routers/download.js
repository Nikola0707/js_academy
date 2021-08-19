const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/download');

router.get('/', controller.downloadFile);

module.exports = router