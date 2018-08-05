const express = require('express');

const authController = require('../controllers/userController');

const authRouter = express.Router();

authRouter.route('/login')
  .get(authController.renderLogin)
  .post(authController.handleLogin);

authRouter.route('/register')
  .get(authController.renderRegister)
  .post(authController.handleRegister);

authRouter.get('/logout', authController.handleLogout);

module.exports = authRouter;
