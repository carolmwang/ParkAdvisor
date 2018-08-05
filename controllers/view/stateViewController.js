module.exports = {
  showAllStates(req, res) {
    res.render('allStates', {
      states: res.locals.states,
    });
  },
};
