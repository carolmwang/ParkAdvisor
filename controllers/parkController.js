const parkDB = require('../models/parkDB');

module.exports = {
  index(req, res, next) {
    parkDB.findAll()
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(err => next(err));
  },
  getInState(req, res, next) {
    parkDB.findByState(req.query.id)
      .then((parks) => {
        res.locals.parks = parks;
        console.log(parks);
        next();
      })
      .catch(err => next(err));
  },
  getOne(req, res, next) {
    parkDB.findById(req.params.id)
      .then((park) => {
        res.locals.park = park;
        next();
      })
      .catch(err => next(err));
  },
};
