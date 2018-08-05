const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = require('../models/userDB');

passport.use(new LocalStrategy((username, password, done) => (
  userDB.login(username, password)
    .then(user => done(null, user))
    .catch(err => done(null, false)))));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userDB.findById(id)
    .then(user => done(null, user))
    .catch(done);
});
