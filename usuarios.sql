/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : usuarios

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-01-23 17:51:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for persona
-- ----------------------------
DROP TABLE IF EXISTS `persona`;
CREATE TABLE `persona` (
  `cedula` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `fecha_nacimiento` varchar(30) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=MyISAM AUTO_INCREMENT=1073514034 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of persona
-- ----------------------------
INSERT INTO `persona` VALUES ('1073514033', ' Andreszxczxczxc ', ' Monroy  ', ' andresd55@hotmail.com  ', ' asd ');
INSERT INTO `persona` VALUES ('423456456', 'Felipe', 'Monroy', 'felipe@hotmail.com', 'SDF');
INSERT INTO `persona` VALUES ('1254141', ' _erer ', ' _yuyu  ', ' _dfdf@dfg.fgh  ', ' _2018-01-24 ');
INSERT INTO `persona` VALUES ('1235', 'oper', 'prueba', 'sjdf@test.csd', '2018-01-27');
INSERT INTO `persona` VALUES ('123123', 'wrwer', 'www', 'ww@wwc.df', '2018-01-24');
