const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/auth');

router.post('/register', controller.register)
      .post('/login', controller.login)
      .post('/logout', controller.logout)
      .get('/refresh-token', controller.refreshToken)
      .post('/change-password', controller.changePassword)
      .post('/forgot-password', controller.forgotPassword)
      .post('/reset-password', controller.resetPassword)


module.exports = router;