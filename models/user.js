const bcrypt = require('bcryptjs');
const db = require('../config/connection');

// functions:
// register function
// find All
// find by id
// save
// destroy
module.exports = {
    register(first_name, last_name, email, username, password) {
        return bcrypt.hash(password, 8)
        .then((hash) => {
            return db.one(`
            INSERT INTO users
            (first_name, last_name, email, username, password_digest)
            VALUES
            ($/first_name/, $/last_name/, $/email/, $/username/, $/password_digest/)
            RETURNING *
            `, {
                first_name,
                last_name,
                email,
                username,
                password_digest: hash,
                })
        })
    }, 
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