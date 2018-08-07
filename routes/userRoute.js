const express = require('express');
const userControl = require('../controllers/userController');
const userView = require('../controllers/view/userViewController');
const commentControl = require('../controllers/commentController');
const authControl = require('../controllers/userController');

const userRouter = express.Router();

userRouter.use(authControl.usersOnly);

// user router to delete comment
userRouter.delete('/:id', commentControl.destroy, userView.handleDelete, userView.show404);

userRouter.route('/')
// user router to get and show user information (comments--mvp)
  .get(userControl.userInfo, userView.showUserInfo, userView.show404)
// user route to update comment
  .put(userControl.userInfo, commentControl.update, userView.handleUpdate, userView.show404);
module.exports = userRouter;
