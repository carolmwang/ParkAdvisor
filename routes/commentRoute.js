const express = require('express');

const commentControl = require('../controllers/commentController');
const commentView = require('../controllers/view/commentViewController');

const commentRouter = express.Router();

commentRouter.get('/:id/edit', );
commentRouter.get('/new', );

commentRouter.route('/:id')
  .get(commentControl.getByPark, commentView.showComments)
  .put()
  .delete();

commentRouter.route('/')
  .get()
  .post();


module.exports = commentRouter;
