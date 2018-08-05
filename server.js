require('dotenv').config();
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const passport       = require('passport');
const session        = require('express-session');
const flash          = require('connect-flash');
const api            = require('./api/api');

const parkRouter = require('./routes/parkRoute');
const authRouter = require('./routes/auth');
const authController = require('./controllers/userController');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configure passport
require('./config/passport');

// set up logger
app.use(logger('dev'));

app.use(session({
  secret: 'park-secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

// set up routers
app.use('/parks', parkRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  console.log(req.user);
  res.send(`hello ${req.user ? req.user.username : 'world'}`);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Testing server');
});

// api.getAllParks().then(parks => console.log(parks));
