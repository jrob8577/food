DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  password VARCHAR(256),
  salt VARCHAR(256),
  username VARCHAR(256),
  email VARCHAR(256),
  lat DECIMAL,
  long DECIMAL
);

DROP TABLE IF EXISTS foods;
CREATE TABLE foods (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  name VARCHAR(256),
  description TEXT,
  lat DECIMAL,
  long DECIMAL,
  available BOOLEAN
);

DROP TABLE IF EXISTS threads;
CREATE TABLE threads (
  id SERIAL PRIMARY KEY
);

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  thread_id INTEGER REFERENCES threads,
  from_id INTEGER REFERENCES users,
  to_id INTEGER REFERENCES users,
  food_id INTEGER REFERENCES foods,
  content TEXT,
  read BOOLEAN
);