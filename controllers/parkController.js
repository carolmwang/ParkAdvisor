const parkDB = require('../models/parkDB');

module.exports = {
  // find all parks
  index(req, res, next) {
    parkDB.findAll()
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(err => next(err));
  },
  // find all parks in a specific state
  getInState(req, res, next) {
    parkDB.findByState(req.query.code)
      .then((parks) => {
        res.locals.parks = parks;
        console.log(parks);
        next();
      })
      .catch(err => next(err));
  },
  // get one park by id
  getOne(req, res, next) {
    parkDB.findById(req.params.id)
      .then((park) => {
        res.locals.park = park;
        console.log(park);
        next();
      })
      .catch(err => next(err));
  },
};
