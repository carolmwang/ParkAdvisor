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
    // COME BACK TO THIS AND FIX THE REQ
    commentDB.save({ ...req.body, author: req.user.id })
      .then((comment) => {
        res.redirect(`/${req.params.park_id}`);
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
    const { author, content, park_id } = req.body;
    const modifiedComment = {
      id: req.pararms.id,
      author,
      content,
      park_id,
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
