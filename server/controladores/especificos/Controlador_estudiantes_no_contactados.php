<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Persona.php');
class Controlador_estudiantes_no_contactados extends Controlador_Base
{
   function leer($args)
   { 
        $idCarrera = $args["idCarrera"];
        if($idCarrera == 0){
            $sql = "SELECT * FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN EstadoCupo ON Cupo.idEstadoCupo = EstadoCupo.id INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo WHERE PeriodoLectivo.matriculable = 1 AND EstadoCupo.id = 1;";
        }else{
            $sql = "SELECT * FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN EstadoCupo ON Cupo.idEstadoCupo = EstadoCupo.id INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo WHERE PeriodoLectivo.matriculable = 1 AND EstadoCupo.id = 1 AND idCarrera = ?;";
        }
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $idCarrera = $args["idCarrera"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      if($idCarrera == 0){
        $sql = "SELECT Persona.* 
FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id 
INNER JOIN EstadoCupo ON Cupo.idEstadoCupo = EstadoCupo.id 
INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id 
INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo 
WHERE PeriodoLectivo.matriculable = 1 AND EstadoCupo.id = 1 ORDER BY Persona.apellido1 LIMIT $desde,$registrosPorPagina;";
      }else{
        $sql = "SELECT Persona.* FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN EstadoCupo ON Cupo.idEstadoCupo = EstadoCupo.id INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo WHERE PeriodoLectivo.matriculable = 1 AND EstadoCupo.id = 1 AND idCarrera = ? ORDER BY Persona.apellido1  LIMIT $desde,$registrosPorPagina;";
      }
      $parametros = array($idCarrera);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $idCarrera = $args["idCarrera"];
      $registrosPorPagina = $args["registros_por_pagina"];
      if($idCarrera == 0){
        $sql = "SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN EstadoCupo ON Cupo.idEstadoCupo = EstadoCupo.id INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo WHERE PeriodoLectivo.matriculable = 1 AND EstadoCupo.id = 1;";
      }else{
        $sql = "SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN EstadoCupo ON Cupo.idEstadoCupo = EstadoCupo.id INNER JOIN JornadaCarrera ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo WHERE PeriodoLectivo.matriculable = 1 AND EstadoCupo.id = 1 AND idCarrera = ?;";
      }
      $parametros = array($idCarrera);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta[0];
   }

   function contactado($args)
   {
    $idEstudiante = $args["id"];
    $sql = "UPDATE Cupo SET idEstadoCupo = 2 WHERE idPersona = ?;";
    $parametros = array($idEstudiante);
    $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
    return $respuesta[0];
   }
}