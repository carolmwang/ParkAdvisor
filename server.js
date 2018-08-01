const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));


