<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_asignaturas_matriculables extends Controlador_Base
{
    function consultar($args)
    { 
        $identificacion = $args["identificacion"];
        $sql = "SELECT Asignatura.* FROM Asignatura INNER JOIN AsignaturaCupo ON AsignaturaCupo.idAsignatura = Asignatura.id INNER JOIN Cupo ON AsignaturaCupo.idCupo = Cupo.id INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Cupo.idPeriodoLectivo INNER JOIN Persona ON Cupo.idPersona = Persona.id WHERE PeriodoLectivo.matriculable = 1 AND Persona.identificacion = ?;";
        $parametros = array($identificacion);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}