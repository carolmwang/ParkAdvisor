const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api/api');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.listen(PORT, () => {
    console.log(`The server is up and running on port: ${PORT}`)
});

api.getAllParks().then(parks => console.log(parks));


