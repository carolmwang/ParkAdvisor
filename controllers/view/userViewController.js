module.exports = {
  // error not found
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  // middleware: shows the user's page of comments
  showUserInfo(req, res) {
    res.render('./users/userPage', {
      user: res.locals.userData,
    });
  },
  // middleware: redirects the user back
  // to their profile after updating a comment
  handleUpdate(req, res) {
    res.redirect('/user');
  },
  // middleware: redirects the user back
  // to their profile after deleting a comment
  handleDelete(req, res) {
    res.redirect('/user');
  },
};
