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
  `resume` varchar(4096) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `location` varchar(96) DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gliders_users_idx` (`users_id`),
  CONSTRAINT `fk_gliders_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gliders`
--

LOCK TABLES `gliders` WRITE;
/*!40000 ALTER TABLE `gliders` DISABLE KEYS */;
INSERT INTO `gliders` VALUES (1,'https://www.aapca.net/wp-content/uploads/2018/02/Planeur-ASK13.jpg',NULL,NULL,'ASK13',1971,'Planeur idéal pour la formation. 4650heures de vol. 3755 lâchés. Bon état. En 1965 Rudolf Kaiser (en) poursuit son développement des biplaces Ka 2 et Ka 7 par l\'ASK 13, fabriqué en bois, métal et fibre de verre. Sa large verrière offre une bonne visibilité aux deux pilotes. Les ailes en flèche inverse de 6 degrés permettent au pilote en place arrière d\'être assis près des centres de gravité et de portance. Le planeur est ainsi correctement centré avec un ou deux pilotes. Les ailes sont entoilées, avec des aérofreins Schempp-Hirth en métal, dessous et dessus. Le fuselage est en tubes d\'acier soudés et entoilé, sauf le nez en fibre de verre. L\'empennage est en plaqué bois, sauf l\'arrière des gouvernes de profondeur et de direction qui est entoilé. La gouverne de profondeur tribord est équipée d\'un compensateur de profondeur aérodynamique Flettner.',8500,'Bruxelles',1),(2,'https://file.espritmodel.com/airplanes/topmodel/swift-s1-deluxe-red6n.jpg',NULL,NULL,'SWIFT S1',1993,'Planeur  monoplace avec train d\'atterrissage rétractable. Il fut fabriqué par Margański & Mysłowski, mais n\'est plus en production.',32000,'Lille',2),(3,'https://c4.staticflickr.com/4/3890/14359164891_7bd74dfc7e_h.jpg','http://www.aeromodelisme.org/site/wp-content/uploads/2016/01/Vol_LS4_Avernes_aeromodelisme-750x400.jpg',NULL,'LS4',1985,'Planeur en excellent état. 2045heures de vol pour 1380 lâchés. Le LS4 est le successeur du LS1 dans la classe FAI Standard, il effectua son premier vol en 1980. Il est le troisième planeur non militaire le plus produit (après le Schneider Grunau Baby et le Blaník) : un total de 1048 exemplaires a été construit par Rolladen-Schneider jusqu\'à la faillite en 2003. C\'est une longue production, seulement comparable à celle du Schempp-Hirth Discus. Le LS4 gagna les deux premières places du championnat du monde 1981 à Paderborn en Allemagne de l\'Ouest et les six premières places du championnat du monde 1983 à Hobbs, Nouveau Mexique. Ce planeur reste l\'un des favoris dans les compétitions de la classe Club et dans le vol à voile de loisir.',27000,'Brive',1),(4,'https://upload.wikimedia.org/wikipedia/commons/0/07/DG1001-wing-over.jpg','https://aviationsmilitaires.net/media/pictures/800px-Segelflugzeug_01.jpg','https://aviationsmilitaires.net/media/pictures/Dg1000-fabrik.jpg','DG1000',2003,'Version 20m d\'envergure. 2300h de vol. Le DG1000 est un planeur de la classe FAI biplace construit par DG Flugzeugbau et qui effectua son premier vol en juillet 2000 à Spire, en Allemagne.',46000,'Annecy',3),(5,'https://upload.wikimedia.org/wikipedia/commons/0/0f/Schempp-Hirth_DuoDiscus.jpg','http://lh5.ggpht.com/-iWCNCow78gA/Ua9nvuj_U9I/AAAAAAAAFp0/4xABntVHJBg/s400/20130605_172328.jpg',NULL,'Discus',2001,'Planeur de compétition. 1600h de vol. Le Discus est un planeur de classe standard conçu par Schempp-Hirth. Il fut produit en Allemagne entre 1984 et 1995 puis la production continua en République tchèque. Il remplace le Cirrus Standard. Il fut conçu par Klaus Holighaus',31000,'Berlin',4),(6,'https://aviationsmilitaires.net/media/pictures/800px-Grob_102_Standard_Astir_III.jpg',NULL,NULL,'ASTIR',1983,'Le Grob 102, appelé gentiment “le petit grob” est le premier planeur en composite (fibre de verre, résine) que les membres sont appelés à voler en solo au CVVQ. C’est un planeur à la fois confortable, maniable, facile à piloter et ses performances sont assez bonnes, ce qui en fait une machine très appréciée autant par les pilotes débutants que ceux plus avancés. Il a été conçu par Burkhart Grob et fabriqué par la compagnie Grob Aircraft en Allemagne. Cette compagnie, qui œuvrait auparavant dans le domaine de la fabrication de pièces pour l’industrie automobile, s’est impliquée dans le domaine de la fabrication de planeurs en produisant sous licence à partir de 1971 des planeurs Cirrus Standard pour la compagnie Schempp-Hirth, un des plus anciens manufacturiers allemand dans le domaine. Le 102 a été le premier planeur conçu par Grob avec l’expérience acquise avec le Cirrus. Le premier vol d’essai a eu lieu en 1974. Il a été produit en diverses versions: à train fixe, à deux ou trois roues, et à train rétractable.',8200,'Limoges',1),(8,'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Planeur_Centrair_P%C3%A9gase_90_C101_type_A.jpg/1280px-Planeur_Centrair_P%C3%A9gase_90_C101_type_A.jpg',NULL,NULL,'Pégase C101',1986,'Le Centrair C101 Pégase est un planeur monoplace de classe standard, abondamment utilisé dans les clubs français, en raison de son origine française et de sa polyvalence (simplicité de pilotage, performance, sécurité). Il est également utilisé pour former les officiers pilotes de l\'armée de l\'air.',13900,'Toulouse',1);
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
  `name` varchar(48) NOT NULL,
  `email` varchar(48) NOT NULL,
  `password` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'TomGun','tomgun@gmail.com','tomgun'),(2,'Chuck Yeager','chucky@gmail.com','chucky'),(3,'Le Baron Rouge','lebaronrouge@gmail.com','lebaron'),(4,'Pappy Boyington','pappy@gmail.com','pappy'),(8,'usertest','usertest@gmail.com','$2b$10$p2SNvlqpVhb2kOobXoOHZuoXhoIZQyxqVrggVlw7D982hzKXSVqwu'),(9,'usertest2','usertest2@gmail.com','$2b$10$r1kP3Pr2MS7jhb9Qb8nMN.efr1C5qzEZmquCuO.RhqA/fzbafFpIW');
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

-- Dump completed on 2021-02-07 16:12:30
