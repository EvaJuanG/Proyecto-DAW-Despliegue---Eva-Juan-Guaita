CREATE TABLE `film` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img` mediumtext DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `classification` varchar(255) DEFAULT NULL,
  `plot` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
