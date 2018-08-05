const bcrypt = require('bcryptjs');
const db = require('../config/connection');

// functions:
// register function
// find All
// find by id
// save
// destroy
// Do I need to insert all columns in the register function?

function register(first_name, last_name, email, username, password) {
  return bcrypt.hash(password, 8)
    .then(hash => db.one(`
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
    }));
}
function findByUsername(username) {
  return db.one(`
      SELECT *
      FROM users
      WHERE username = $1
      `, username);
}
function findById(id) {
  return db.one(`
      SELECT *
      FROM users
      WHERE id = $1`, id);
}
async function login(username, password) {
  try {
    const user = await findByUsername(username);
    const res = await bcrypt.compare(password, user.password_digest);
    if (!res) {
      throw new Error('bad password');
    }
    delete user.password_digest;
    return user;
  } catch (err) {
    throw new Error('Unauthorized');
  }
}

module.exports = {
  register,
  findByUsername,
  findById,
  login,
};
