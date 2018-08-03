const parkDB = require('../models/parkDB');

module.exports = {
  index(req, res, next) {
    parkDB.findAll()
      .then((parks) => {
        res.locals.parks = parks;
        next();
        // return parks;
      })
      .catch(err => next(err));
  },
  getOne(req, res, next) {
    parkDB.findById(req.params.id)
      .then((park) => {
        res.locals.park = park;
        next();
        // return park;
      })
      .catch(err => next(err));
  },
};
