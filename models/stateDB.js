const db = require('../config/connection');

module.exports = {
  findAll() {
    return db.many(`
    SELECT *
    FROM states
    `);
  },
  findById(id) {
    return db.one(`
    SELECT *
    FROM states
    WHERE id = $1`, id);
  },
  save(state) {
    return db.one(`
    INSERT INTO states
    (name)
    VALUES
    ($/name/)
    RETURNING *`, state);
  },
};
