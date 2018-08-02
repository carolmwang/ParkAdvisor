DROP TABLE IF EXISTS user_comments;
DROP TABLE IF EXISTS user_parks;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS parks;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_digest VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE parks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) REFERENCES users(username) ON DELETE CASCADE,
    content TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW(),
    park_id INTEGER REFERENCES parks(id) ON DELETE CASCADE
);

CREATE TABLE user_parks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    park_id INTEGER REFERENCES parks(id) ON DELETE CASCADE
);


