### Schema

CREATE DATABASE tasks_db;
USE tasks_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
