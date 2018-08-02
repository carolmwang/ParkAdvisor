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
        FROM parks
        `); 
    },
    findById(id) {
        return db.one(`
        SELECT *
        FROM parks
        WHERE id = $1`, id);
    },
    save(park) {
        return db.one(`
        INSERT INTO parks
        (name, location)
        VALUES
        ($/name/, $/location/)
        RETURNING *`, park);
    },
    destroy(id) {
        return db.none(`
        DELETE FROM parks
        WHERE id = $1`, id);
    },
};