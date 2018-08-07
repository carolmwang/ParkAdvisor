const express = require('express');
const parkControl = require('../controllers/parkController');
const parkView = require('../controllers/view/parkViewController');
const commentControl = require('../controllers/commentController');
const commentView = require('../controllers/view/commentViewController');
const userControl = require('../controllers/userController');
const userView = require('../controllers/view/userViewController');
const authControl = require('../controllers/userController');
const parkRouter = express.Router();

parkRouter.use(authControl.usersOnly);

// tester
// const showJSON = (req, res) => {
//   res.json(res.locals.park);
// };

// new comment router
parkRouter.post('/:id/new', (req, res) => {
  res.render('newComment');
});

//routes for one park
parkRouter.route('/:id')
  .get(parkControl.getOne, parkView.showOne, commentControl.getByPark,
    commentView.showComments, userControl.userInfo, parkView.showOne, parkView.show404)
  .post(parkControl.getOne, commentControl.createNewComment, parkView.show404);

// routes for all parks
parkRouter.route('/')
  .post(parkControl.index, parkView.show404)
  .get(parkControl.getInState, parkView.showParks, parkView.show404);


module.exports = parkRouter;
