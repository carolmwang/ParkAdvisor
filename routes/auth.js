const express = require('express');

const authController = require('../controllers/userController');

const authRouter = express.Router();
// login routes to get to /state
authRouter.route('/login')
  .get(authController.renderLogin)
  .post(authController.handleLogin);

// register routes to handle register
authRouter.route('/register')
  .get(authController.renderRegister)
  .post(authController.handleRegister);

// logout router -- not used in MVP
authRouter.get('/logout', authController.handleLogout);

module.exports = authRouter;
