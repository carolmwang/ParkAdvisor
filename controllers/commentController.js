const commentDB = require('../models/commentDB');

module.exports = {
  // middleware: create new comment
  createNewComment(req, res, next) {
    commentDB.save({ ...req.body, author: req.user.username, park_id: req.params.id })
      .then((comment) => {
        res.redirect(`/parks/${req.params.id}`);
      })
      .catch(err => next(err));
  },
  // middleware: show all comments
  index(req, res, next) {
    commentDB.findAll()
      .then((comments) => {
        res.locals.comments = comments;
        next();
      }).catch(err => next(err));
  },
  // middleware: find all comments by park
  getByPark(req, res, next) {
    commentDB.findCommentsByPark(req.params.id)
      .then((comments) => {
        res.locals.comments = comments;
        next();
      }).catch(err => next(err));
  },
  // middleware: find comments by id
  getOne(req, res, next) {
    commentDB.findById(req.params.id)
      .then((comment) => {
        res.locals.comment = comment;
        next();
      }).catch(err => next(err));
  },
  // middleware: create new comment
  create(req, res, next) {
    commentDB.save(req.body)
      .then((newComment) => {
        res.locals.comment = newComment;
      })
      .catch(err => next(err));
  },
  // middleware: update comment
  update(req, res, next) {
    const { comment_id, content } = req.body;
    const modifiedComment = {
      id: comment_id,
      content,
    };
    commentDB.update(modifiedComment)
      .then((comment) => {
        res.locals.comment = comment;
        next();
      })
      .catch(err => next(err));
  },
  // middleware: delete comment
  destroy(req, res, next) {
    commentDB.destroy(req.params.id)
      .then(() => {
        next();
      })
      .catch(err => next(err));
  },

};
