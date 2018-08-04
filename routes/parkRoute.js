const express = require('express');
const parkController = require('../controllers/parkController');
const parkView = require('../controllers/view/parkViewController');
const commentController = require('../controllers/commentController');
const commentViewController = require('../controllers/view/commentViewController');

const parkRouter = express.Router();

// const showJSON = (req, res) => {
//   res.json(res.locals.park);
// };

parkRouter.post('/:id/edit', );
parkRouter.post('/:id/new', (req, res) => {
  res.render('newComment');
});

parkRouter.route('/:id')
  .get(parkController.getOne, parkView.showOne, parkView.show404)
  .put()
  .delete()
  .post(commentController.createNewComment);

parkRouter.route('/')
  .post()
  .get(parkController.index, parkView.showParks, parkView.show404);


module.exports = parkRouter;
