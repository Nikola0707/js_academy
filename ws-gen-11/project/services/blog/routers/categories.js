const express = require('express');
const router = express.Router();
const categoriesController = require('../../../controllers/categories');

router.get('/', categoriesController.fetchAll)
      .get('/:id', categoriesController.fetchOne)
      .post('/', categoriesController.create)
      .patch("/:id", categoriesController.patchUpdate)
      .put("/:id", categoriesController.putUpdate)
      .delete("/:id", categoriesController.delete)

module.exports = router;