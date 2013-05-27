-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 27. Mai 2013 um 23:20
-- Server Version: 5.5.27
-- PHP-Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `reservation`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `file`
--

CREATE TABLE IF NOT EXISTS `file` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OBJEKT_ID` int(11) NOT NULL,
  `NAME` varchar(20) NOT NULL,
  `DESCRIPTION` varchar(50) NOT NULL,
  `FILE_NAME` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=uft8 AUTO_INCREMENT=2 ;

--
-- Daten für Tabelle `file`
--

INSERT INTO `file` (`ID`, `OBJEKT_ID`, `NAME`, `DESCRIPTION`, `FILE_NAME`) VALUES
(1, 1, 'Casa Capuns', 'Beschrieb Ferienwohnung', 'Casa_Capuns.pdf');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `objekt`
--

CREATE TABLE IF NOT EXISTS `objekt` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `DESCRIPTION` mediumtext NOT NULL,
  `CREATION_DATE` date NOT NULL,
  `ADMIN_LINK` mediumtext NOT NULL,
  `RESERV_LINK` mediumtext NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Daten für Tabelle `objekt`
--

INSERT INTO `objekt` (`ID`, `NAME`, `DESCRIPTION`, `CREATION_DATE`, `ADMIN_LINK`, `RESERV_LINK`) VALUES
(1, 'Casa Capuns', '<ul>\r\n                    <li>Entrée mit separatem Eingang über Aussentreppe</li>\r\n                    <li>Wohnzimmer mit Essplatz und Küche</li>\r\n                    <li>Schlafzimmer mit Doppelbett und Schrank</li>\r\n                    <li>Dusche/WC</li>\r\n                    <li>Kleiner Balkon Richtung Süden</li>\r\n                    <li>Kellerraum und Waschküche mit Waschmaschine und Tumbler</li>\r\n                    <li>Schlafmöglichkeiten für 4 - 5 Personen: Schlafzimmer mit \r\n                    Doppelbett, Wohnzimmer mit Bettsofa ausziehbar für 2 Personen, \r\n                    zusätzliche Schlafmöglichkeit mit mobilem Klappbett</li>\r\n                    <li>Beheizt mit Elektroheizung und/oder Holzofen aus Speckstein</li>\r\n                    <li>Parkmöglichkeit in Autounterstand</li>\r\n                </ul>', '2013-05-27', 'adminHash', 'reservHash');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `picture`
--

CREATE TABLE IF NOT EXISTS `picture` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OBJEKT_ID` int(11) NOT NULL,
  `NAME` varchar(20) NOT NULL,
  `DESCRIPTION` varchar(50) NOT NULL,
  `FILE_NAME` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=uft8 AUTO_INCREMENT=9 ;

--
-- Daten für Tabelle `picture`
--

INSERT INTO `picture` (`ID`, `OBJEKT_ID`, `NAME`, `DESCRIPTION`, `FILE_NAME`) VALUES
(1, 1, 'img1', 'some Image', '1.png'),
(2, 1, 'img2', 'some Image', '2.png'),
(3, 1, 'img3', 'some Image', '3.png'),
(4, 1, 'img4', 'some Image', '4.png'),
(5, 1, 'img5', 'some Image', '5.png'),
(6, 1, 'img6', 'some Image', '6.png'),
(7, 1, 'bild 0', 'Casa Capuns', '0.png'),
(8, 1, 'bild 7', 'Ein weiteres Bild', '7.png');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OBJEKT_ID` int(11) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `STATUS` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=uft8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
