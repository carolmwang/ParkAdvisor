const express = require('express');

const commentControl = require('../controllers/commentController');
const commentView = require('../controllers/view/commentViewController');

const commentRouter = express.Router();

// comment router to show all comments by park
commentRouter.route('/:id')
  .get(commentControl.getByPark, commentView.showComments, commentView.show404);

module.exports = commentRouter;
