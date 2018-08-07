const stateDB = require('../models/stateDB');

module.exports = {
  // find all states
  index(req, res, next) {
    stateDB.findAll()
      .then((states) => {
        res.locals.states = states;
        next();
      })
      .catch(err => next(err));
  },
};
