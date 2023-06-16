-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 21, 2023 at 12:06 PM
-- Server version: 10.2.44-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techjain_gcms`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `ID` int(11) NOT NULL,
  `USERROLE` int(11) DEFAULT 0,
  `USERNAME` varchar(255) NOT NULL,
  `F_NAME` varchar(255) NOT NULL,
  `L_NAME` varchar(255) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `PASSWORD` text NOT NULL,
  `EMAILSTATUS` tinyint(1) NOT NULL,
  `ISDELETED` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`ID`, `USERROLE`, `USERNAME`, `F_NAME`, `L_NAME`, `EMAIL`, `PASSWORD`, `EMAILSTATUS`, `ISDELETED`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'admin', 'admin', 'daat', 'admin@123.in', '$2b$10$4Kxk1HhiqSEtTGa0lVgbKuS2MevUwF15w20iLtLW6uL0DpQKQbO5q', 0, 0, '2022-12-05 16:55:12', '2022-12-05 16:55:12'),
(2, 0, 'test', 'user', 'data', 'test@123.in', '$2b$10$PFWO89kncoWgn7qlXsPWS.68DYRFKH7zMu0D.52jtRzm79EgoM6Mu', 0, 0, '2022-12-05 16:56:10', '2022-12-05 16:56:10'),
(3, 0, 'testuser', 'test ', 'admin user', 'testadmin@123.com', '$2b$10$JnIkYswYIp79Z09g/0z17OTCuEhMLYR6HIPhkIqOi33P3aDvQhpvi', 0, 0, '2022-12-06 17:51:51', '2022-12-06 17:51:51'),
(4, 0, 'testuser', 'test ', 'admin user', 'vaibhavpandey373@gmail.com', '$2b$10$JnIkYswYIp79Z09g/0z17OTCuEhMLYR6HIPhkIqOi33P3aDvQhpvi', 0, 0, '2022-12-06 17:51:51', '2022-12-06 17:51:51'),
(5, 0, 'user10', 'user', 'data ', 'user@admin.com', '$2b$10$Pn9RcAxcILYnBwIWDTdge.aJqmKrddnjzxKlEyqQBSfoq/IYMlOnu', 0, 0, '2022-12-26 16:38:07', '2022-12-26 16:38:07'),
(6, 0, 'smritijain', 'Smriti', 'Jain', 'smriti.techjain@gmail.com', '$2b$10$xPvyb3PK1CzNYfhmiiaIAOADX/QN3AGSOLEiA6FeZu2frzHZjiB3K', 0, 0, '2023-01-11 04:36:29', '2023-01-11 04:36:29'),
(7, 0, 'test1', 'Test Name 1', 'Test Surname 1', 'gcmsbuddy@gmail.com', '$2b$10$vKlADKmEUiGpCizaBclBLOukRM9vQ6OUawqbOkyMOggTznqTSXjlC', 0, 0, '2023-01-28 15:06:21', '2023-01-28 15:06:21'),
(8, 0, 'vaibhavtest', 'vaibhav', 'pandey', 'test@gmail.com', '$2b$10$4da3gFDguL1dsNAiC8s8YuAlHk0ctV.RIaNrXAtL/qQy9MujPMUsi', 0, 0, '2023-02-14 13:16:59', '2023-02-14 13:16:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
