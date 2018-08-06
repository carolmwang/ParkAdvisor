const express = require('express');
const userControl = require('../controllers/userController');
const userView = require('../controllers/view/userViewController');
const commentControl = require('../controllers/commentController');
const authControl = require('../controllers/userController');
const userRouter = express.Router();

userRouter.use(authControl.usersOnly);

userRouter.delete('/:id', commentControl.destroy, userView.handleDelete);

userRouter.get('/', userControl.userInfo, userView.showUserInfo);

userRouter.route('/')
  .get(userControl.userInfo, userView.showUserInfo)
  .put(userControl.userInfo, commentControl.update, userView.handleUpdate);
module.exports = userRouter;
