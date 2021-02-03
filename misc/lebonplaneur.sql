-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: lebonplaneur
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gliders`
--

DROP TABLE IF EXISTS `gliders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gliders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(512) DEFAULT NULL,
  `image2` varchar(512) DEFAULT NULL,
  `image3` varchar(512) DEFAULT NULL,
  `model` varchar(96) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `resume` varchar(2048) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `location` varchar(96) DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gliders_users_idx` (`users_id`),
  CONSTRAINT `fk_gliders_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gliders`
--

LOCK TABLES `gliders` WRITE;
/*!40000 ALTER TABLE `gliders` DISABLE KEYS */;
INSERT INTO `gliders` VALUES (1,'https://www.aapca.net/wp-content/uploads/2018/02/Planeur-ASK13.jpg',NULL,NULL,'ASK13',1971,'Planeur biplace, idéal pour la formation et les premiers vols',8500,'Bruxelles',1),(2,'https://file.espritmodel.com/airplanes/topmodel/swift-s1-deluxe-red6n.jpg',NULL,NULL,'SWIFT S1',1993,'Planeur  monoplace avec train d\'atterrissage rétractable. Il fut fabriqué par Margański & Mysłowski, mais n\'est plus en production.',32000,'Lille',2),(3,'https://www.dg-flugzeugbau.de/wp-content/uploads/RTEmagicC_ls4-neue-https://www.aapca.net/wp-content/uploads/2018/02/Planeur-C101-Pegase.jpg',NULL,NULL,'LS4',1985,'Le LS3 a été développé comme le premier planeur de la classe 15 mètres (classe qui a été créée en 1974 par FAI). Construit à partir des versions antérieures, le LS1 et le LS2, Wolf Lemke développa un nouveau fuselage plus large et une gouverne de direction et une profondeur plus Planeur en excellent état. 5000h de vol. Le LS4 est le successeur du LS1 dans la classe FAI Standard, il effectua son premier vol en 1980. Il est le troisième planeur non militaire le plus produit (après le Schneider Grunau Baby et le Blaník) : un total de 1048 exemplaires a été construit par Rolladen-Schneider jusqu\'à la faillite en 2003. C\'est une longue production, seulement comparable à celle du Schempp-Hirth Discus.',27000,'Brive',1),(4,'https://upload.wikimedia.org/wikipedia/commons/0/07/DG1001-wing-over.jpg',NULL,NULL,'DG1000',2003,'Version 20m d\'envergure. 2300h de vol. Le DG1000 est un planeur de la classe FAI biplace construit par DG Flugzeugbau et qui effectua son premier vol en juillet 2000 à Spire, en Allemagne.',46000,'Annecy',3),(5,'https://imgproc.airliners.net/photos/airliners/8/2/1/0951128.jpg?v=v40',NULL,NULL,'Discus',2001,'Planeur de compétition. 1600h de vol. Le Discus est un planeur de classe standard conçu par Schempp-Hirth. Il fut produit en Allemagne entre 1984 et 1995 puis la production continua en République tchèque. Il remplace le Cirrus Standard. Il fut conçu par Klaus Holighaus',31000,'Berlin',4);
/*!40000 ALTER TABLE `gliders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(48) DEFAULT NULL,
  `email` varchar(48) DEFAULT NULL,
  `password` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'TomGun','tomgun@gmail.com','tomgun'),(2,'Chuck Yeager','chucky@gmail.com','chucky'),(3,'Le Baron Rouge','lebaronrouge@gmail.com','lebaron'),(4,'Pappy Boyington','pappy@gmail.com','pappy');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-03 10:55:56
