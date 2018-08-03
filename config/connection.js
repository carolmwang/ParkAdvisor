const pgp = require('pg-promise')();
const dbConfig = require('./dbConfig');

const db = pgp(dbConfig);

module.exports = db;
