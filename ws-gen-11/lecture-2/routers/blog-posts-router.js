const express = require('express');
const router = express.Router();
const controller = require('../controllers/blog-posts');

router.get('/', controller.fetchAll)
      .get('/:id', controller.fetchOne)
      .post('/', controller.create)
      .patch("/:id", controller.patchUpdate)
      .put("/:id", controller.putUpdate)
      .delete('/:id', controller.delete)


module.exports = router;