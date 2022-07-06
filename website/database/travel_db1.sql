-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema travel_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `travel_db` ;

-- -----------------------------------------------------
-- Schema travel_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `travel_db` DEFAULT CHARACTER SET utf8 ;
USE `travel_db` ;

-- -----------------------------------------------------
-- Table `travel_db`.`sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`sales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `total` INT NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) NULL,
  `admin` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel_db`.`tours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`tours` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `short-description` VARCHAR(100) NOT NULL,
  `long_description` LONGTEXT NOT NULL,
  `price` INT NOT NULL,
  `duration` INT NOT NULL,
  `image1` VARCHAR(100) NOT NULL,
  `image2` VARCHAR(100) NOT NULL,
  `image3` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel_db`.`sales_tour`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`sales_tour` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tour_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `sales_id` INT NOT NULL,
  `date_tour` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `travel_db`.`tours`
-- -----------------------------------------------------
START TRANSACTION;
USE `travel_db`;
INSERT INTO `travel_db`.`tours` (`id`, `title`, `short-description`, `long_description`, `price`, `duration`, `image1`, `image2`, `image3`) VALUES (1, 'Represa de guatapé', 'Conoce uno de los lugares mas lindos y llenos de historia de la region', 'Salida desde y hacia el hotel', 100000, 4, 'tour-guatape1.jpeg', 'tour-guatape2.jpeg', 'tour-guatape3.jpeg');
INSERT INTO `travel_db`.`tours` (`id`, `title`, `short-description`, `long_description`, `price`, `duration`, `image1`, `image2`, `image3`) VALUES (2, 'Piedra del peñol', 'Este es uno de los atractivos turisticos mas importantes del país, divisa toda la region', 'salida desde y hacia el hotel', 100000, 4, 'tour-piedra1.jpeg', 'tour-piedra2.jpeg', 'tour-piedra3.jpeg');
INSERT INTO `travel_db`.`tours` (`id`, `title`, `short-description`, `long_description`, `price`, `duration`, `image1`, `image2`, `image3`) VALUES (3, 'Vuela en parapente', 'Sal de la rutina y Vive una experiencia inolvidable lanzandote desde el cielo', 'Salida desde y hacia el hotel', 100000, 6, 'tour-1653606899750.png', 'tour-parapente2.png', 'tour-parapente3.jpeg');
INSERT INTO `travel_db`.`tours` (`id`, `title`, `short-description`, `long_description`, `price`, `duration`, `image1`, `image2`, `image3`) VALUES (4, 'Jardin', 'Un hermoso lugar para descansar en familia y compartir con la naturaleza', 'Salida desde y hacia el hotel', 100000, 10, 'tour-jardin1.jpeg', 'tour-jardin2jpeg', 'tour-jardin3.jpeg');
INSERT INTO `travel_db`.`tours` (`id`, `title`, `short-description`, `long_description`, `price`, `duration`, `image1`, `image2`, `image3`) VALUES (5, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO `travel_db`.`tours` (`id`, `title`, `short-description`, `long_description`, `price`, `duration`, `image1`, `image2`, `image3`) VALUES (6, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

COMMIT;

