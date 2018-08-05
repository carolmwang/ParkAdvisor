const express = require('express');
const parkController = require('../controllers/parkController');
const parkView = require('../controllers/view/parkViewController');
const commentController = require('../controllers/commentController');
const commentViewController = require('../controllers/view/commentViewController');
const userController = require('../controllers/userController');
const authController = require('../controllers/userController');
const parkRouter = express.Router();

parkRouter.use(authController.usersOnly);

// const showJSON = (req, res) => {
//   res.json(res.locals.park);
// };

parkRouter.post('/:id/edit', );
parkRouter.post('/:id/new', (req, res) => {
  res.render('newComment');
});

parkRouter.route('/:id')
  .get(parkController.getOne, parkView.showOne, userController.userInfo, parkView.show404)
  .put()
  .delete()
  .post(commentController.createNewComment);

parkRouter.route('/')
  .post(parkController.index, parkView.show404)
  .get(parkController.getInState, parkView.showParks, parkView.show404);


module.exports = parkRouter;
