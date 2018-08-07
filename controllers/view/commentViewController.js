module.exports = {
  // error not found
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  // middleware function that shows all comments for a specific park
  showComments(req, res) {
    res.render('./allComments', {
      comment: res.locals.comments,
    });
  },
  // show one comment
  showOne(req, res) {
    res.render('comments', {
      comment: res.locals.comment,
    });
  },
};
