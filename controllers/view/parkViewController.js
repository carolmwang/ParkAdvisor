module.exports = {
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show400(err, req, res, next) {
    res.sendStatus(400);
  },
  showParks(req, res) {
    res.render('parks', {
      park: res.locals.parks,
    });
  },
  showOne(req, res) {
    res.render('parks', {
      park: res.locals.park,
    });
  },
};
