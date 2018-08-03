require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api/api');

const parkRouter = require('./routes/parks');

const PORT = process.env.PORT || 3000;

const app = express();

// set up logger
app.use(logger('dev'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/parks', parkRouter);

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});

// api.getAllParks().then(parks => console.log(parks));
