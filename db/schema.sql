-- create and use the database burgers_db
-- id: auto inc int as primary key
-- burger_name string
-- devoured boolean
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id              int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name     varchar(200) NOT NULL,
    devoured        BOOLEAN DEFAULT false
);


