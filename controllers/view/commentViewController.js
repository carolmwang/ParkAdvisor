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
  showEditComment(req, res) {

  },
  handleCreate(req, res) {
    // res.format({
    //   html() {
        res.render('parks', { park_id: req.query.id, author: req.query.id });
      },
      // json() {
      //   res.json(res.locals.comments);
      // },
    // });
  // },
};
  // handleUpdate(req, res) {

  // },
  // handleDelete(req, res) {

  // },
