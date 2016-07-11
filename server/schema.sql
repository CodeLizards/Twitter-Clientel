
CREATE DATABASE IF NOT EXISTS sites;

USE sites;

CREATE TABLE domain (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(200)  NOT NULL,
  time_posted timestamp NOT NULL,
  valid varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/