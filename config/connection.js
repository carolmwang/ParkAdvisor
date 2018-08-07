// require pg promise
const pgp = require('pg-promise')();
// require config
const dbConfig = require('./dbConfig');

const db = pgp(dbConfig);

module.exports = db;
