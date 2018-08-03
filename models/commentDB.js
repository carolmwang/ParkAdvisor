const db = require('../config/connection');

// functions:
// find All
// find by id
// save
// destroy
module.exports = {
  findAll() {
    return db.many(`
      SELECT *
      FROM comments
      `);
  },
  findById(id) {
    return db.one(`
      SELECT *
      FROM comments
      WHERE id = $1`, id);
  },
  save(comment) {
    return db.one(`
      INSERT INTO comments
      (author, content, park_id)
      VALUES
      ($/author/, $/content/, $/park_id/)
      RETURNING *`, comment);
  },
  destroy(id) {
    return db.none(`
      DELETE FROM comments
      WHERE id = $1`, id);
  },
  update(comment) {
    return db.one(`
      UPDATE comments
      SET (
        author = $/author/, 
        content = $/content/, 
        park_id = $/park_id/)
      WHERE id = $/id/
      RETURNING *`, comment);
  },

};
