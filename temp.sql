-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 14, 2017 at 04:16 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.15-1+deb.sury.org~xenial+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temp`
--

-- --------------------------------------------------------

--
-- Table structure for table `testfirsttbl_new`
--

CREATE TABLE `testfirsttbl_new` (
  `id` int(11) NOT NULL,
  `start_msg` varchar(200) NOT NULL,
  `imei_no` varchar(100) NOT NULL,
  `pm1` varchar(200) DEFAULT NULL,
  `pm2` varchar(200) DEFAULT NULL,
  `pm3` varchar(200) DEFAULT NULL,
  `pm4` varchar(200) DEFAULT NULL,
  `pm5` varchar(200) DEFAULT NULL,
  `pm6` varchar(200) DEFAULT NULL,
  `pm7` varchar(200) DEFAULT NULL,
  `pm8` varchar(200) DEFAULT NULL,
  `pm9` varchar(200) DEFAULT NULL,
  `pm10` varchar(200) DEFAULT NULL,
  `pm11` varchar(200) DEFAULT NULL,
  `pm12` varchar(200) DEFAULT NULL,
  `pm13` varchar(200) DEFAULT NULL,
  `pm14` varchar(200) DEFAULT NULL,
  `pm15` varchar(200) DEFAULT NULL,
  `pm16` varchar(200) DEFAULT NULL,
  `pm17` varchar(200) DEFAULT NULL,
  `pm18` varchar(200) DEFAULT NULL,
  `pm19` varchar(200) DEFAULT NULL,
  `pm20` varchar(200) DEFAULT NULL,
  `pm21` varchar(200) DEFAULT NULL,
  `pm22` varchar(200) DEFAULT NULL,
  `pm23` varchar(200) DEFAULT NULL,
  `pm24` varchar(200) DEFAULT NULL,
  `pm25` varchar(200) DEFAULT NULL,
  `pm26` varchar(200) DEFAULT NULL,
  `pm27` varchar(200) DEFAULT NULL,
  `pm28` varchar(200) DEFAULT NULL,
  `pm29` varchar(200) DEFAULT NULL,
  `pm30` longtext,
  `pm31` varchar(200) DEFAULT NULL,
  `pm32` varchar(200) DEFAULT NULL,
  `pm33` varchar(200) DEFAULT NULL,
  `pm34` varchar(200) DEFAULT NULL,
  `pm35` varchar(200) DEFAULT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `stop_msg` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testfirsttbl_new`
--

INSERT INTO `testfirsttbl_new` (`id`, `start_msg`, `imei_no`, `pm1`, `pm2`, `pm3`, `pm4`, `pm5`, `pm6`, `pm7`, `pm8`, `pm9`, `pm10`, `pm11`, `pm12`, `pm13`, `pm14`, `pm15`, `pm16`, `pm17`, `pm18`, `pm19`, `pm20`, `pm21`, `pm22`, `pm23`, `pm24`, `pm25`, `pm26`, `pm27`, `pm28`, `pm29`, `pm30`, `pm31`, `pm32`, `pm33`, `pm34`, `pm35`, `datetime`, `stop_msg`) VALUES
(13448, '$$$', '111111111111110', '1', '240', '250', '230', '100', '50', '70', '50', '1500', '455', '45', '65', '5000', '1', '0', '1', '0', '1', '1', '1', '230', '240', '230', '50', '50', '50', '51', '45', '34344', '0', '0', '0', '0', '0***', '0', '2017-02-14 05:17:24', '***');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `testfirsttbl_new`
--
ALTER TABLE `testfirsttbl_new`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `testfirsttbl_new`
--
ALTER TABLE `testfirsttbl_new`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13449;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
