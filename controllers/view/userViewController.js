module.exports = {

  showUserInfo(req, res) {
    res.render('./users/userPage', {
      user: res.locals.userData,
    });
  },
  handleUpdate(req, res) {
    res.redirect('/');
  },
};
