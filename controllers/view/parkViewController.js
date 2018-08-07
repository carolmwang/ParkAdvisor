module.exports = {
  // error not found
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  // show all parks in one state middleware
  showParks(req, res) {
    res.render('allParks', {
      parks: res.locals.parks,
    });
  },
  // show one park EJS middleware
  showOne(req, res) {
    res.render('onePark', {
      park: res.locals.park,
    });
  },
};
