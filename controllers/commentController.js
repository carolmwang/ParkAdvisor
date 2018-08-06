const commentDB = require('../models/commentDB');
// create new comment middleware function
// get all middleware function
// get one middleware function
// create middlewere function
// update middleware function
// delete middleware function
// showNewForm function to show empty comment template
// showEditForm function to show edit comment template

module.exports = {
  createNewComment(req, res, next) {
    commentDB.save({ ...req.body, author: req.user.username, park_id: req.params.id })
      .then((comment) => {
        res.redirect(`/parks/${req.params.id}`);
      })
      .catch(err => next(err));
  },
  index(req, res, next) {
    commentDB.findAll()
      .then((comments) => {
        res.locals.comments = comments;
        next();
      }).catch(err => next(err));
  },
  getOne(req, res, next) {
    commentDB.findById(req.params.id)
      .then((comment) => {
        res.locals.comment = comment;
        next();
      }).catch(err => next(err));
  },
  create(req, res, next) {
    commentDB.save(req.body)
      .then((newComment) => {
        res.locals.comment = newComment;
      })
      .catch(err => next(err));
  },
  update(req, res, next) {
    const { id, content } = req.body;
    const modifiedComment = {
      id,
      content,
    };
    
    commentDB.update(modifiedComment)
      .then((comment) => {
        res.locals.comment = comment;
        next();
      })
      .catch(err => next(err));
  },
  destroy(req, res, next) {
    commentDB.destroy(req.params.id)
      .then(() => {
        next();
      })
      .catch(err => next(err));
  },

};
