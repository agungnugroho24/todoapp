-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2022 at 01:57 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo_list`
--

CREATE TABLE `todo_list` (
  `id` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todo_list`
--

INSERT INTO `todo_list` (`id`, `email`, `title`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'tes1@skyshi.com', 'tes1', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(2, 'tes2@skyshi.com', 'tes2', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(3, 'tes3@skyshi.com', 'tes3', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(4, 'tes4@skyshi.com', 'tes4', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(5, 'tes5@skyshi.com', 'tes5', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(6, 'tes6@skyshi.com', 'tes6', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(7, 'tes7@skyshi.com', 'tes7', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(8, 'tes8@skyshi.com', 'tes8', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(9, 'tes9@skyshi.com', 'tes9', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(10, 'tes10@skyshi.com', 'tes10', '2022-12-08 23:25:28', '2022-12-08 23:25:28', NULL),
(11, 'tes11@gmail.com', 'tes11', '2022-12-09 00:07:01', '2022-12-09 00:07:01', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_list`
--
ALTER TABLE `todo_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
