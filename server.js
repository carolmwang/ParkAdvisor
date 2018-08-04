require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const api = require('./api/api');

const parkRouter = require('./routes/parkRoute');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set up logger
app.use(logger('dev'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/parks', parkRouter);

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});

// api.getAllParks().then(parks => console.log(parks));
