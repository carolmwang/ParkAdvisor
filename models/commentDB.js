const db = require('../config/connection');

module.exports = {
  // find all comments
  findAll() {
    return db.many(`
      SELECT *
      FROM comments
      `);
  },
  // find comments by park, joining all 3 tables
  findCommentsByPark(id) {
    return db.many(`
    SELECT c.id, c.author, c.content, c.date_created, 
    p.id AS park_id, p.name AS park, s.name
    FROM comments c
    JOIN parks p
    ON p.id = c.park_id
    JOIN states s
    ON p.state = s.code
    WHERE park_id = $1`,
    id);
  },
  // find comment by id
  findById(id) {
    return db.one(`
      SELECT *
      FROM comments
      WHERE id = $1`, id);
  },
  // create new comment
  save(comment) {
    return db.one(`
      INSERT INTO comments
      (author, content, park_id)
      VALUES
      ($/author/, $/content/, $/park_id/)
      RETURNING *`, comment);
  },
  // delete comment by id
  destroy(id) {
    return db.none(`
      DELETE FROM comments
      WHERE id = $1`, id);
  },
  // update comment
  update(comment) {
    return db.one(`
      UPDATE comments
      SET content = $/content/
      WHERE id = $/id/
      RETURNING *`, comment);
  },

};
