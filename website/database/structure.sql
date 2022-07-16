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
-- Table `travel_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`users` (
  `id` INT AUTO_INCREMENT NOT NULL UNIQUE,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `phone` BIGINT(20) NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) NULL,
  `admin` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel_db`.`sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`sales` (
  `id` INT AUTO_INCREMENT NOT NULL UNIQUE,
  `user_id` INT NOT NULL,
  `total` INT NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `travel_db`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel_db`.`tours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`tours` (
  `id` INT AUTO_INCREMENT NOT NULL UNIQUE,
  `title` VARCHAR(45) ,
  `short_description` VARCHAR(110) ,
  `long_description` VARCHAR(200) ,
  `price` BIGINT ,
  `duration` BIGINT ,
  `image1` VARCHAR(100) ,
  `image2` VARCHAR(100) ,
  `image3` VARCHAR(100) ,
   PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel_db`.`sales_tour`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel_db`.`sales_tour` (
  `id` INT AUTO_INCREMENT NOT NULL UNIQUE,
  `tour_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `sales_id` INT NOT NULL,
  `date_tour` DATE NOT NULL,
  PRIMARY KEY (`id`),
  -- INDEX `sales_id_idx` (`sales_id` ASC) VISIBLE,
  -- INDEX `tour_id_idx` (`tour_id` ASC) VISIBLE,
  CONSTRAINT `tour_id`
    FOREIGN KEY (`tour_id`)
    REFERENCES `travel_db`.`tours` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `sales_id`
    FOREIGN KEY (`sales_id`)
    REFERENCES `travel_db`.`sales` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `travel_db`.`tours`
-- -----------------------------------------------------
START TRANSACTION;
USE `travel_db`;


INSERT INTO travel_db.users(id, name, last_name, phone, email, password, image, admin) 
VALUES 
(1, "Sofia", "Gutierrez", 1164324525, "sofiaguierrez1845@gmail.com", "$2a$10$1qPxkt5.8AYVQ/QNrzH9Ju0t0WSUpiYcAi/I0vmDg5.mxSUEH8oti", "user-1655343080662.png",true), 
(2, "ANA MARIA", "RIOS PABON", 3147252991, "ana-rios91@hotmail.com","$2a$10$fK6Wg2CfKihUiMNsrungheKs3FRhVhzJDUwoC324rQEzdU0TcOqb6", "user-1655500161339.jpg", true), 
(3, "Nicolas", "Cerone", 57576555665, "nico@gmail.com", "$2a$10$N/7aJI2Ajtta7r1gj4kixeAV0JvI0ckeYLtTkdJVNu9WDcruBTyv2", "user-1655650003056.jpg", true), 
(4, "ana", "RIOS PABON", 3147252991, "grupodepoder10@gmail.com", "$2a$10$7atZNb/0JRts2BhtdWh4bOzJOcaCkSMNiJQzAzIWD4fiafBelP32a", "user-1656445462611.png", false);



INSERT INTO travel_db.tours(id,title,short_description,long_description,price,duration,image1,image2,image3)
VALUES
(1,"Represa de Guatapé","Embalse amplio y pintoresco rodeado de colinas, senderos y una imponente cresta","Salida desde y hasta el hotel. En los horarios pactados con el contratante, en el trayecto conoceran el viejo peñol, y podran disfrutar de paseo en lancha (precio no incluido)",500000,4,"tour-guatape1.jpeg","tour-guatape2.jpeg","tour-guatape3.jpeg"),
(2,"Piedra del Peñol ","Este es uno de los atractivos turisticos más importantes del país, divisa toda la región","Salida desde y hasta el hotel. En los horarios pactados con el contratante, en el trayecto conoceran el viejo peñol, y podran disfrutar de paseo en lancha (precio no incluido)",40000,6,"tour-piedra1.jpeg","tour-piedra2.jpeg","tour-piedra3.jpeg"),
(3,"Vuela en Parapente  ","Sal de la rutina, vive una expreriencia inolvidable lanzandote desde el cielo y disfrutando las vistas","Salida desde y hasta el hotel. En los horarios pactados con el contratante, en el trayecto conoceran el viejo peñol, y podran disfrutar de paseo en lancha (precio no incluido)",300000,7,"tour-1653606899750.png","tour-parapente2.png","tour-parapente3.jpeg"),
(4,"Jardín ","Un hermoso lugar para descansar en familia y compartir con la naturaleza","Salida desde y hasta el hotel. En los horarios pactados con el contratante, en el trayecto conoceran el viejo peñol, y podran disfrutar de paseo en lancha (precio no incluido)",600000,4,"tour-jardin1.jpeg","tour-jardin2.jpeg","tour-jardin3.jpeg"),
(5,"Represa de Guatapé","El Embalse Peñol-Guatapé. Conoce uno de los lugares mas lindos y llenos de historia de la región","Salida desde y hasta el hotel. En los horarios pactados con el contratante, en el trayecto conoceran el viejo peñol, y podran disfrutar de paseo en lancha (precio no incluido)",50000,4,"tour-guatape1.jpeg","tour-guatape2.jpeg","tour-guatape3.jpeg"),
(6,"Piedra del Peñol  ","Este es uno de los atractivos turisticos más importantes del país, divisa toda la región ","Salida desde y hasta el hotel. En los horarios pactados con el contratante, en el trayecto conoceran el viejo peñol, y podran disfrutar de paseo en lancha (precio no incluido)",30000,6,"tour-piedra1.jpeg","tour-piedra2.jpeg","tour-piedra3.jpeg");

INSERT INTO travel_db.sales(id, user_id, total, date)
VALUES(1, 2, 1360000, "2022-05-17"),
(2, 1, 120000, "2022-05-10"),
(3, 4, 40000,"2022-06-04"),
(4, 3, 90000, "2022-06-12");

INSERT INTO travel_db.sales_tour(id,tour_id,quantity,sales_id,date_tour)
VALUES(1,2,4,1,"2022-05-11"),(2,4,2,1,"2022-05-11"),(3,2,3,2,"2022-05-11"),(4,2,1,3,"2022-06-04"),(5,6,3,4,"2022-06-10");



COMMIT;

