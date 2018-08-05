const express = require('express');
const stateController = require('../controllers/stateController');
const stateView = require('../controllers/view/stateViewController');
const authController = require('../controllers/userController');

const stateRouter = express.Router();

stateRouter.use(authController.usersOnly);

// FOR TESTING PURPOSES
// const showJSON = (req, res) => {
//   res.json(res.locals.states);
// };

stateRouter.get('/', stateController.index, stateView.showAllStates);


module.exports = stateRouter;
