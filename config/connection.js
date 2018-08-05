const pgp = require('pg-promise')({
  query(q) {
    console.log(q.query);
  },
});
const dbConfig = require('./dbConfig');

const db = pgp(dbConfig);

module.exports = db;
