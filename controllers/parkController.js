const parkDB = require('../models/parks');

module.exports = {
    index(req, res, next) {
        parkDB.findAll()
              .then((parks) => {
                  res.locals.parks = parks;
                  next();
              })
              .catch((err) => next(err));
    },
    getOne(req, res, next) {
        parkDB.findById(req.params.id)
              .then((park) => {
                  res.locals.park = park;
                  next();
              })
              .catch((err) => next(err));
    },
};