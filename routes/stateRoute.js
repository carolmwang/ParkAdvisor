const express = require('express');
const stateController = require('../controllers/stateController');
const stateView = require('../controllers/view/stateViewController');
const authController = require('../controllers/userController');
const parkView = require('../controllers/view/parkViewController');
const parkController = require('../controllers/parkController');

const stateRouter = express.Router();

stateRouter.use(authController.usersOnly);

const showJSON = (req, res) => {
  res.json(res.locals.states);
};

stateRouter.route('/:id')
  .get(stateController.getOne, showJSON);

stateRouter.route('/')
  .get(stateController.index, stateView.showAllStates)
  .post(parkController.index, parkView.showParks);

module.exports = stateRouter;
