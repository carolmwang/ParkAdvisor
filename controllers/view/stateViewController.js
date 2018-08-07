module.exports = {
  // error not found
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  // show all states (drop down)
  showAllStates(req, res) {
    res.render('allStates', {
      states: res.locals.states,
    });
  },
};
