const express = require('express');
const parkController = require('../controllers/parkController');

const parkRouter = express.Router();

const showJSON = (req, res) => {
  res.json(res.locals.park);
};

parkRouter.get('/:id', parkController.getOne, showJSON);
parkRouter.get('/', parkController.index, showJSON);

module.exports = parkRouter;
