// TAKEN FROM JOHN MASTER AUTH LECTURE
// require passport
const passport = require('passport');

const userDB = require('../models/userDB');

function renderLogin(req, res) {
  res.render('auth/login', { errors: req.flash('error') });
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/states',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and password',
});

function renderRegister(req, res) {
  res.render('auth/register', { errors: req.flash('error') });
}

function handleRegister(req, res, next) {
  const { username, password } = req.body;
  userDB.register(username, password)
    .then((newUser) => {
      req.login(newUser, err => (err ? next(err) : res.redirect('/auth/login')));
    })
    .catch((err) => {
      req.flash('error', 'username unavailable');
      res.redirect('/auth/register');
    });
}

function handleLogout(req, res) {
  req.logout();
  res.redirect('/auth/login');
}

function usersOnly(req, res, next) {
  if (req.user) {
    next();
  } else {
    req.flash('error', 'Login required');
    res.redirect('/auth/login');
  }
}

// middleware function to get all comments by one user
function userInfo(req, res, next) {
  userDB.findAllComments(req.user.id)
    .then((data) => {
      res.locals.userData = data;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
  handleLogout,
  usersOnly,
  userInfo,
};
