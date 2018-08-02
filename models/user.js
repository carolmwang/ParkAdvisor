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
    findByUsername(username) {
        return db.one(`
        SELECT *
        FROM users
        WHERE id = $1
        `, username); 
    },
    findById(id) {
        return db.one(`
        SELECT *
        FROM users
        WHERE id = $1`, id);
    },
    async login(username, password) {
        try {
            const user = await this.findByUsername(username);
            const res = await bcrypt.compare(password, user.password_digest);
            if (!res) {
                throw new Error('password not accepted');
            }
            delete user.password_digest;
            return user;
        } catch (err) {
            throw new Error('Unauthorized');
        }
    }
};