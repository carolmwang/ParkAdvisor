const db = require('../config/connection');

// functions:
// find All
// find by id
// save
// destroy
module.exports = {
  findAll() {
    return db.many(`
    SELECT parks.id, parks.name, parks.state_id, states.name AS state
    FROM parks
    JOIN states
    ON states.id = parks.state_id
    `);
  },
  findById(id) {
    return db.one(`
    SELECT parks.id, parks.name, states.name AS state
    FROM parks
    JOIN states
    ON states.id = parks.state_id
    WHERE parks.id = $1`, id);
  },
  findByState(id) {
    return db.many(`
    SELECT parks.id, parks.name, parks.state_id, states.name AS state
    FROM parks
    JOIN states
    ON states.id = parks.state_id
    WHERE parks.state_id = $1`, id);
  },
  save(park) {
    return db.one(`
    INSERT INTO parks
    (name, state_id)
    VALUES
    ($/name/, $/state_id/)
    RETURNING *`, park);
  },
  destroy(id) {
    return db.none(`
    DELETE FROM parks
    WHERE id = $1`, id);
  },
};
function findAll() {
  return db.many(`
  SELECT *
  FROM parks
  `);
}
console.log(findAll());