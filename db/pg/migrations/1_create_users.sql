DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    hashed_password varchar NOT NULL
);