const bcrypt = require('bcryptjs');
const db = require('../config/connection');

// referred to john master auth lecture
// registering new user and hashing their password on create
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
// find user by username
function findByUsername(username) {
  return db.one(`
      SELECT *
      FROM users
      WHERE username = $1
      `, username);
}
// find user by id
function findById(id) {
  return db.one(`
      SELECT *
      FROM users
      WHERE id = $1`, id);
}
// find all comments by user jointables: parks, comments
function findAllComments(id) {
  return db.many(`
  SELECT users.first_name, users.username, comments.id AS comment_id, 
  comments.content, comments.date_created, comments.park_id, parks.name AS park
  FROM users
  JOIN comments
  ON comments.author = users.username
  JOIN parks
  ON parks.id = comments.park_id
  WHERE users.id = $1
  GROUP BY users.first_name, users.username, parks.name, comments.id
  ORDER BY comments.date_created DESC`, id);
}
// login function used with passport
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
  findAllComments,
};
