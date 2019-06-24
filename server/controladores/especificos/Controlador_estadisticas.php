<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/especificos/DatosCupo.php');
class Controlador_estadisticas extends Controlador_Base
{
   function estudiantes_matriculados($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT Carrera.nombre, Jornada.descripcion, Asignatura.idPeriodoAcademico, Asignatura.nombre, Persona.identificacion, Persona.nombre1, Persona.nombre2, Persona.apellido1, Persona.apellido2, Persona.correoElectronicoInstitucional, Persona.correoElectronicoPersonal FROM Matricula INNER JOIN Persona ON Matricula.idPersona = Persona.id INNER JOIN Carrera ON Carrera.id = Matricula.idCarrera INNER JOIN Jornada ON Jornada.id = Matricula.idJornada INNER JOIN MatriculaAsignatura ON Matricula.id = MatriculaAsignatura.idMatricula INNER JOIN Asignatura ON MatriculaAsignatura.idAsignatura = Asignatura.id WHERE Matricula.idPeriodoLectivo = $idPeriodoLectivo;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

   function cuenta_estudiantes_carrera($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT a.Instituto, a.Carrera, count(a.Estudiantes) as 'cuenta' FROM (SELECT DISTINCT Instituto.descripcion as 'Instituto', Carrera.nombre as 'Carrera', Persona.id as 'Estudiantes' FROM Persona INNER JOIN Matricula ON Matricula.idPersona = Persona.id INNER JOIN Carrera ON Carrera.id = Matricula.idCarrera INNER JOIN Instituto ON Carrera.idInstituto = Instituto.id WHERE Matricula.idPeriodoLectivo = $idPeriodoLectivo) a GROUP BY a.Instituto, a.Carrera ORDER BY a.Instituto, a.Carrera;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
   
   function cuenta_estudiantes_carrera_jornada($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT a.Instituto, a.Carrera, a.Jornada, count(a.Estudiantes) as 'cuenta' FROM (SELECT DISTINCT Instituto.descripcion as 'Instituto', Carrera.nombre as 'Carrera', Jornada.descripcion as 'Jornada', Persona.id as 'Estudiantes' FROM Persona INNER JOIN Matricula ON Matricula.idPersona = Persona.id INNER JOIN Carrera ON Carrera.id = Matricula.idCarrera INNER JOIN Instituto ON Carrera.idInstituto = Instituto.id INNER JOIN Jornada ON Jornada.id = Matricula.idJornada WHERE Matricula.idPeriodoLectivo = $idPeriodoLectivo) a GROUP BY a.Instituto, a.Carrera, a.Jornada ORDER BY a.Instituto, a.Carrera, a.Jornada;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

   function cuenta_estudiantes_carrera_jornada_nivel($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT a.Instituto, a.Carrera, a.Jornada, a.PeriodoAcademico, count(a.Estudiantes) as 'cuenta' FROM (SELECT DISTINCT Instituto.descripcion as 'Instituto', Carrera.nombre as 'Carrera', Jornada.descripcion as 'Jornada', Asignatura.idPeriodoAcademico as 'PeriodoAcademico', Persona.id as 'Estudiantes' FROM Persona INNER JOIN Matricula ON Matricula.idPersona = Persona.id INNER JOIN Carrera ON Carrera.id = Matricula.idCarrera INNER JOIN Instituto ON Carrera.idInstituto = Instituto.id INNER JOIN Jornada ON Jornada.id = Matricula.idJornada INNER JOIN MatriculaAsignatura ON MatriculaAsignatura.idMatricula = Matricula.id INNER JOIN Asignatura ON Asignatura.id = MatriculaAsignatura.idAsignatura WHERE Matricula.idPeriodoLectivo = $idPeriodoLectivo) a GROUP BY a.Instituto, a.Carrera, a.Jornada, a.PeriodoAcademico ORDER BY a.Instituto, a.Carrera, a.Jornada, a.PeriodoAcademico;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

   function estudiantes_solicitud_no_matriculados($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT Carrera.nombre, Jornada.descripcion, p.* FROM (SELECT DISTINCT Cupo.id as idCupo, Persona.id as idEstudiante, Persona.identificacion, Persona.nombre1, Persona.nombre2, Persona.apellido1, Persona.apellido2, Persona.telefonoCelular, Persona.telefonoDomicilio, Persona.correoElectronicoPersonal, Persona.correoElectronicoInstitucional FROM Persona INNER JOIN Cupo ON Persona.id = Cupo.idPersona INNER JOIN SolicitudMatricula ON SolicitudMatricula.idPersona = Cupo.idPersona WHERE SolicitudMatricula.idPersona NOT IN (SELECT Matricula.idPersona FROM Matricula WHERE Matricula.idPeriodoLectivo = $idPeriodoLectivo) AND SolicitudMatricula.idPeriodoLectivo = $idPeriodoLectivo) p INNER JOIN Cupo ON Cupo.id = p.idCupo INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN Carrera ON JornadaCarrera.idCarrera = Carrera.id INNER JOIN Jornada ON Jornada.id = JornadaCarrera.idJornada WHERE Cupo.idPeriodoLectivo = $idPeriodoLectivo;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

   function cuenta_solicitud_no_matriculados($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT a.Carrera, a.Jornada, count(a.idCupo) as cuenta FROM (SELECT Carrera.nombre as Carrera, Jornada.descripcion as Jornada, p.* FROM (SELECT DISTINCT Cupo.id as idCupo, Persona.id as idEstudiante, Persona.identificacion, Persona.nombre1, Persona.nombre2, Persona.apellido1, Persona.apellido2, Persona.telefonoCelular, Persona.telefonoDomicilio, Persona.correoElectronicoPersonal, Persona.correoElectronicoInstitucional FROM Persona INNER JOIN Cupo ON Persona.id = Cupo.idPersona INNER JOIN SolicitudMatricula ON SolicitudMatricula.idPersona = Cupo.idPersona WHERE SolicitudMatricula.idPersona NOT IN (SELECT Matricula.idPersona FROM Matricula WHERE Matricula.idPeriodoLectivo = $idPeriodoLectivo) AND SolicitudMatricula.idPeriodoLectivo = $idPeriodoLectivo) p INNER JOIN Cupo ON Cupo.id = p.idCupo INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN Carrera ON JornadaCarrera.idCarrera = Carrera.id INNER JOIN Jornada ON Jornada.id = JornadaCarrera.idJornada WHERE Cupo.idPeriodoLectivo = $idPeriodoLectivo) a GROUP BY a.Carrera, a.Jornada ORDER BY a.Carrera, a.Jornada;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
   
   function estudiantes_cupo_no_solicitud($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT Carrera.nombre as Carrera, Jornada.descripcion as Jornada, p.* FROM (SELECT * FROM Cupo WHERE Cupo.idPersona NOT IN (SELECT SolicitudMatricula.idPersona FROM SolicitudMatricula)) p INNER JOIN JornadaCarrera ON JornadaCarrera.id = p.idJornadaCarrera INNER JOIN Carrera ON JornadaCarrera.idCarrera = Carrera.id INNER JOIN Jornada ON JornadaCarrera.idJornada = Jornada.id WHERE p.idPersona NOT IN (SELECT Matricula.idPersona FROM Matricula) AND p.idPeriodoLectivo = $idPeriodoLectivo;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

   function cuenta_cupo_no_solicitud($args)
   { 
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT a.Carrera, a.Jornada, count(a.id) FROM (SELECT Carrera.nombre as Carrera, Jornada.descripcion as Jornada, p.* FROM (SELECT * FROM Cupo WHERE Cupo.idPersona NOT IN (SELECT SolicitudMatricula.idPersona FROM SolicitudMatricula)) p INNER JOIN JornadaCarrera ON JornadaCarrera.id = p.idJornadaCarrera INNER JOIN Carrera ON JornadaCarrera.idCarrera = Carrera.id INNER JOIN Jornada ON JornadaCarrera.idJornada = Jornada.id WHERE p.idPersona NOT IN (SELECT Matricula.idPersona FROM Matricula) AND p.idPeriodoLectivo = $idPeriodoLectivo) a GROUP BY a.Carrera, a.Jornada ORDER BY a.Carrera, a.Jornada;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}