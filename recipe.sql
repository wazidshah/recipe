-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 12, 2018 at 01:46 PM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `c_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `r_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `comment` varchar(255) COLLATE utf8_bin NOT NULL,
  `from_user` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`c_id`, `r_id`, `comment`, `from_user`) VALUES
('75814535-6e1c-11e8-bbf9-c615726e6544', '55972fc4-6e19-11e8-bbf9-c615726e6544', 'asdasdadasdadasdasdadsasd', '09dddf19-6e05-11e8-bbf9-c615726e6544'),
('85de43ae-6e1c-11e8-bbf9-c615726e6544', '55972fc4-6e19-11e8-bbf9-c615726e6544', 'asdasdadasdadasdasdadsasd', '09dddf19-6e05-11e8-bbf9-c615726e6544'),
('924cadcb-6e1c-11e8-bbf9-c615726e6544', '55972fc4-6e19-11e8-bbf9-c615726e6544', 'asdasdadasdadasdasdadsasd', '09dddf19-6e05-11e8-bbf9-c615726e6544'),
('a8071a17-6e1c-11e8-bbf9-c615726e6544', '55972fc4-6e19-11e8-bbf9-c615726e6544', 'asdasdadasdadasdasdadsasd', '47ad308f-6e0c-11e8-bbf9-c615726e6544');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
CREATE TABLE IF NOT EXISTS `recipes` (
  `r_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `u_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL,
  `ingridients` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`r_id`, `u_id`, `description`, `ingridients`) VALUES
('55972fc4-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('60ab7e42-6e1c-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'undefined', 'undefined'),
('6cba1085-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('8cda65e7-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('9e3e3ec0-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('asdasd', 'sdasd', 'dsfdsfsfsdfsdfsdf', 'adasdasdasd,asdasd,asdasd,asdasd'),
('b4cc9126-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('f0cd7822-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('f65a392b-6e19-11e8-bbf9-c615726e6544', '09dddf19-6e05-11e8-bbf9-c615726e6544', 'adadddfsdfsdsdfsdsffds', 'asdasdadasdadasdasdadsasd'),
('sdsd', 'dfgf', 'hjkkjhjkhjk', 'adasdasdassdsfdsfd,asdasd,asdasd,asdasd');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_images`
--

DROP TABLE IF EXISTS `recipe_images`;
CREATE TABLE IF NOT EXISTS `recipe_images` (
  `i_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `r_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `path` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`i_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `recipe_images`
--

INSERT INTO `recipe_images` (`i_id`, `r_id`, `path`) VALUES
('asdasdasdadasdsad', '55972fc4-6e19-11e8-bbf9-c615726e6544', 'asssdsdssd');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `u_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `token` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`u_id`, `username`, `password`, `token`) VALUES
('09dddf19-6e05-11e8-bbf9-c615726e6544', '1', '1', '1'),
('404b0b28-6e0c-11e8-bbf9-c615726e6544', '1', '1', '4047fede-6e0c-11e8-bbf9-c615726e6544'),
('47ad308f-6e0c-11e8-bbf9-c615726e6544', 'shanu', '123456', '47ac1c4f-6e0c-11e8-bbf9-c615726e6544'),
('5d081215-6e35-11e8-bbf9-c615726e6544', 'wazidshh@gmail.com', '123456', '5d070fa3-6e35-11e8-bbf9-c615726e6544'),
('asasdasd', 'wazid', 'dddd', 'asdasdadsads'),
('cdc043f7-6e0c-11e8-bbf9-c615726e6544', 'munni', '123456', 'cdbf079c-6e0c-11e8-bbf9-c615726e6544');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
