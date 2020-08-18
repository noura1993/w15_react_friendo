DROP TABLE IF EXISTS interests;
-- DROP TABLE join_users_and_interests;
-- DROP TABLE bookmark;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, /* ? */
  gender VARCHAR(255) NOT NULL,
  age INT,
  picture VARCHAR(255) NOT NULL /* BINARY, BYTEA ? */
);

-- CREATE TABLE bookmark (
--   id SERIAL primary key,
--   name VARCHAR(255) NOT NULL,
--   user_id INT REFERENCES user(id)
-- );


-- CREATE TABLE join_users_and_interests (
--   id SERIAL primary key,
--   user_id INT REFERENCES user(id),
--   interest_id INT references interest(id)
-- );

CREATE TABLE interests (
  id SERIAL primary key,
  name VARCHAR(255) NOT NULL
);


INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('John', 'Cook', 'john@cook.com', 'asdf', 'Male', 23, 'https://api.adorable.io/avatars/127/John.png');
INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('James', 'Fraser', 'james@fraser.com', 'asdf', 'Male', 33, 'https://api.adorable.io/avatars/127/James.png');
INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('Alex', 'Jones', 'alex@jones.com', 'asdf', 'Female', 31, 'https://api.adorable.io/avatars/127/Alex.png');
INSERT INTO users (firstName, lastName, email, password, gender, age, picture) VALUES ('Robin', 'Hood', 'robin@hood.com', 'asdf', 'Female', 24, 'https://api.adorable.io/avatars/127/Robin.png');


INSERT INTO interests (name) VALUES ('Gaming');
INSERT INTO interests (name) VALUES ('Programming');
INSERT INTO interests (name) VALUES ('Dancing');
INSERT INTO interests (name) VALUES ('Rock Climbing');
INSERT INTO interests (name) VALUES ('Hiking');
INSERT INTO interests (name) VALUES ('Chess');




