DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL auto_increment,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  primary key (id)
);
