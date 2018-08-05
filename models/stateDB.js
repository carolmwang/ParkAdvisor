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
  findParks(id) {
    return db.many(`
    SELECT parks.id, parks.name, parks.state_id, states.name AS state
    FROM states
    JOIN parks
    ON states.id = parks.state_id
    WHERE parks.state_id = $1`, id);
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
