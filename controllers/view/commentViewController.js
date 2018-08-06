module.exports = {

  showComments(req, res) {
    res.render('./allComments', {
      comment: res.locals.comments,
    });
  },
  showOne(req, res) {
    res.render('comments', {
      comment: res.locals.comment,
    });
  },
  showAddComment(req, res) {
    res.render('showAddComment');
  },
};
