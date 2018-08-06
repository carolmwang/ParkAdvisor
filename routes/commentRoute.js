const express = require('express');

const commentControl = require('../controllers/commentController');
const commentView = require('../controllers/view/commentViewController');

const commentRouter = express.Router();

commentRouter.route('/:id')
  .get(commentControl.getByPark, commentView.showComments);

module.exports = commentRouter;
