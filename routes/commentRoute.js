const express = require('express');

const commentController = require('../controllers/commentController');
const commentViewController = require('../controllers/view/commentViewController');

const commentRouter = express.Router();

commentRouter.get('/:id/edit', );
commentRouter.get('/new', );

commentRouter.route('/:id')
  .get()
  .put()
  .delete();

commentRouter.route('/')
  .get()
  .post();
