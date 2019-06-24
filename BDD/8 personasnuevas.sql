use ignug;
INSERT INTO Persona (id, identificacion, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, telefonoCelular, correoElectronicoInstitucional, idGenero) VALUE ('633','1707382204', 'Gorky', 'Francisco', 'Estrella', 'Sotomayor', '1971-10-27', '0996603946', 'gestrella@yavirac.edu.ec', '1');
INSERT INTO `Cuenta` (`id`, `idRol`, `idPersona`) VALUES(474, 4, 633);
INSERT INTO Persona (id, identificacion, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, telefonoCelular, correoElectronicoInstitucional, idGenero) VALUE ('634','0401110481', 'Lorena', 'Elizabeth', 'Chulde', 'Obando', '1975-06-28', '0996603406', 'lchulde@yavirac.edu.ec', '2');
INSERT INTO `Cuenta` (`id`, `idRol`, `idPersona`) VALUES(475, 4, 634);
INSERT INTO Persona (id, identificacion, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, telefonoCelular, correoElectronicoInstitucional, idGenero) VALUE ('635','0503034571', 'Blanca', 'Azucena', 'Álvarez', 'Erazo', '1983-09-11', '09999201526', 'balvarez@yavirac.edu.ec', '2');
INSERT INTO `Cuenta` (`id`, `idRol`, `idPersona`) VALUES(476, 4, 635);
INSERT INTO Persona (id, identificacion, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, telefonoCelular, correoElectronicoInstitucional, idGenero) VALUE ('636','1712946902', 'José', 'Mauricio', 'Prieto', 'Encalada', '1980-09-22', '0984914337', 'jprieto@yavirac.edu.ec', '1');
INSERT INTO `Cuenta` (`id`, `idRol`, `idPersona`) VALUES(477, 4, 636);

INSERT INTO Persona (id, identificacion, nombre1, nombre2, apellido1, apellido2, correoElectronicoInstitucional, idGenero) VALUE ('633','1714966221', 'Daicy', 'de los Angeles', 'Aceldo', 'Rodriguez', 'daceldo@yavirac.edu.ec', '2');
INSERT INTO `Cuenta` (`id`, `idRol`, `idPersona`) VALUES(483, 4, 691);
INSERT INTO Persona (id, identificacion, nombre1, nombre2, apellido1, apellido2, correoElectronicoInstitucional, idGenero) VALUE ('633','0702128760', 'Martha', 'Magdalena', 'Gaona', 'Arcentales', 'mgaona@yavirac.edu.ec', '2');
INSERT INTO `Cuenta` (`id`, `idRol`, `idPersona`) VALUES(484, 4, 692);

idPersona 50 to Rol 4;
