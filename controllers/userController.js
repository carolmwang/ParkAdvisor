// require passport
const passport = require('passport');

const userDB = require('../models/userDB');

function renderLogin(req, res) {
  res.render('auth/login', { errors: req.flash('error') });
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/parks/',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and password',
});

function renderRegister(req, res) {
  res.render('auth/register', { errors: req.flash('error') });
}

function handleRegister(req, res, next) {
  const { first_name, last_name, email, username, password } = req.body;
  userDB.register(first_name, last_name, email, username, password)
    .then((newUser) => {
      req.login(newUser, err => (err ? next(err) : res.redirect('/')));
    })
    .catch((err) => {
      req.flash('error', 'username unavailable');
      res.redirect('/auth/register');
    });
}

function handleLogout(req, res) {
  req.logout();
  res.redirect('/');
}

function usersOnly(req, res, next) {
  if (req.user) {
    next();
  } else {
    req.flash('error', 'Login required');
    res.redirect('/auth/login');
  }
}

function userInfo(req, res, next) {
  userDB.findByUsername(username)
    .then((name) => {
      res.locals.userData = name;
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
