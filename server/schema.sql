DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
  /* Describe your table here.*/
  -- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'students'
--
-- ---

DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(12) NULL DEFAULT NULL,
  `age` INTEGER NULL DEFAULT NULL,
  `class_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'classes'
--
-- ---

DROP TABLE IF EXISTS `classes`;

CREATE TABLE `classes` (
  `id` INTEGER AUTO_INCREMENT,
  `class` VARCHAR(20) NULL DEFAULT NULL,
  `teacher` VARCHAR(12) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `students` ADD FOREIGN KEY (class_id) REFERENCES `classes` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `classes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `students` (`id`,`name`,`age`,`class_id`) VALUES
-- ('','','','');
-- INSERT INTO `classes` (`id`,`class`,`teacher`) VALUES
-- ('','','');
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

