const express = require('express');
const router = express.Router();
const citiesController = require('../../../controllers/cities');

router.get('/', citiesController.fetchAll)
      .get('/:id', citiesController.fetchOne)
      .post('/', citiesController.create)

module.exports = router;