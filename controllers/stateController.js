const stateDB = require('../models/stateDB');

module.exports = {
  index(req, res, next) {
    stateDB.findAll()
      .then((states) => {
        res.locals.states = states;
        next();
      })
      .catch(err => next(err));
  },
  // getOne(req, res, next) {
  //   stateDB.findById(req.params.id)
  //     .then((state) => {
  //       res.locals.state = state;
  //       next();
  //     })
  //     .catch(err => next(err));
  // },
};
