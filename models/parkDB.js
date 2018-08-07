const db = require('../config/connection');

module.exports = {
  // find all parks join state
  findAll() {
    return db.many(`
    SELECT parks.id, parks.name, parks.state, states.name AS state
    FROM parks
    JOIN states
    ON states.code = parks.state
    `);
  },
  // find park by id join state
  findById(id) {
    return db.one(`
    SELECT parks.id, parks.name, states.name AS state
    FROM parks
    JOIN states
    ON states.code = parks.state
    WHERE parks.id = $1`, id);
  },
  // find parks by state join state
  findByState(id) {
    return db.many(`
    SELECT parks.id, parks.name, parks.state, states.name AS state
    FROM parks
    JOIN states
    ON states.code = parks.state
    WHERE parks.state = $1`, id);
  },
  // delete park by id -- not used in MVP
  destroy(id) {
    return db.none(`
    DELETE FROM parks
    WHERE id = $1`, id);
  },
  // save park (used for api seeding)
  insert(apiInfo) {
    return db.one(`
    INSERT INTO parks
    (name, state, description, weather, url, directions)
    VALUES
    ($/name/, $/state/, $/description/, $/weather/, $/url/, $/directions/)
    RETURNING *`, apiInfo);
  },
};
