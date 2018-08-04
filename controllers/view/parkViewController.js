module.exports = {
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show400(err, req, res, next) {
    res.sendStatus(400);
  },
  showParks(req, res) {
    res.render('allParks', {
      parks: res.locals.parks,
    });
  },
  showOne(req, res) {
    res.render('onePark', {
      park: res.locals.park,
      name: req.query.name,
    });
  },
};
