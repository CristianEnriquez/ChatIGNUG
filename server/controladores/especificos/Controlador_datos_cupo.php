<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/especificos/DatosCupo.php');
class Controlador_datos_cupo extends Controlador_Base
{
   function consultar($args)
   { 
        $idPersona = $args["idPersona"];
        $sql = "SELECT concat(Persona.nombre1,' ',Persona.nombre2,' ',Persona.apellido1,' ',Persona.apellido2) as 'nombreCompleto', Persona.identificacion, Carrera.nombre as 'carrera', Carrera.id as 'idCarrera', Carrera.siglas as 'siglasCarrera', Jornada.id as 'idJornada', Jornada.descripcion as 'jornada' FROM JornadaCarrera INNER JOIN Carrera ON JornadaCarrera.idCarrera = Carrera.id INNER JOIN Jornada ON Jornada.id = JornadaCarrera.idJornada INNER JOIN Cupo ON Cupo.idJornadaCarrera = JornadaCarrera.id INNER JOIN Persona ON Cupo.idPersona = Persona.id INNER JOIN PeriodoLectivo ON Cupo.idPeriodoLectivo = PeriodoLectivo.id WHERE PeriodoLectivo.matriculable = 1 AND Cupo.idPersona = ?;";
        $parametros = array($idPersona);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}