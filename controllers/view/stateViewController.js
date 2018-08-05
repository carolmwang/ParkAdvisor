module.exports = {
  showAllStates(req, res) {
    res.render('allStates', {
      states: res.locals.states,
    });
  },
  showOneState(req, res) {
    res.render('oneState', {
      state: res.locals.state,
    });
  },
};
