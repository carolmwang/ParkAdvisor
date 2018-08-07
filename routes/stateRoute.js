const express = require('express');
const stateController = require('../controllers/stateController');
const stateView = require('../controllers/view/stateViewController');
const authController = require('../controllers/userController');

const stateRouter = express.Router();

stateRouter.use(authController.usersOnly);

// middleware function to show all states(drop down)
stateRouter.get('/', stateController.index, stateView.showAllStates, stateView.show404);


module.exports = stateRouter;
