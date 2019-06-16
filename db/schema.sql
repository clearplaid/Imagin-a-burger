-- Create the database burger and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
burger_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR (50) NOT NULL,
devoured BOOLEAN
);
