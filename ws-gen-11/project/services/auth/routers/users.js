const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/users');

router.get('/', controller.fetchAll)
      .get('/:id', controller.fetchOne)
      .delete('/:id', controller.delete)
      .put('/:id/follow', controller.follow)
      .put('/:id/unfollow', controller.unfollow)


module.exports = router;




