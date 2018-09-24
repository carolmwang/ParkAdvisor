const db = require('../config/connection');

module.exports = {
  // find all states
  findAll() {
    return db.many(`
    SELECT *
    FROM states
    ORDER BY name ASC
    `);
  },
  // find state by id
  findById(id) {
    return db.one(`
    SELECT *
    FROM states
    WHERE id = $1`, id);
  },
  // find park by state code -- not used in MVP
  findParks(id) {
    return db.many(`
    SELECT parks.id, parks.name, parks.state, states.name AS state
    FROM states
    JOIN parks
    ON states.code = parks.state
    WHERE parks.state = $1`, id);
  },
  // create state -- used to seed data
  save(state) {
    return db.one(`
    INSERT INTO states
    (name, code)
    VALUES
    ($/name/, $/code/)
    RETURNING *`, state);
  },
};
