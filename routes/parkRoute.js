const express = require('express');
const parkControl = require('../controllers/parkController');
const parkView = require('../controllers/view/parkViewController');
const commentControl = require('../controllers/commentController');
const commentView = require('../controllers/view/commentViewController');
const userControl = require('../controllers/userController');
const authControl = require('../controllers/userController');
const parkRouter = express.Router();

parkRouter.use(authControl.usersOnly);

// const showJSON = (req, res) => {
//   res.json(res.locals.park);
// };

parkRouter.post('/:id/edit', );
parkRouter.post('/:id/new', (req, res) => {
  res.render('newComment');
});

parkRouter.route('/:id')
  .get(parkControl.getOne, commentControl.index, commentView.showComments, parkView.showOne, userControl.userInfo, parkView.show404)
  .put()
  .delete()
  .post(parkControl.getOne, commentControl.createNewComment);

parkRouter.route('/')
  .post(parkControl.index, parkView.show404)
  .get(parkControl.getInState, parkView.showParks, parkView.show404);


module.exports = parkRouter;
