<?php
include_once('../controladores/ControladorBase.php');
include_once('../entidades/especificos/AsistenciaEstudiante.php');
class ControladorAsistenciaEstudiante extends ControladorBase
{
   function leer_asignatura(int $persona, int $periodoLectivo)
   { 
        $sql = "SELECT Persona.id AS idPersona, Docente.id AS idDocente, 
        Asignatura.id AS idAsignatura, concat(Asignatura.nombre, \"    Paralelo:\", Paralelo.descripcion) AS asignatura FROM DocenteAsignatura
        INNER JOIN (Docente INNER JOIN Persona ON Persona.id = Docente.idPersona) ON Docente.id = DocenteAsignatura.idDocente
        INNER JOIN Asignatura ON Asignatura.id = DocenteAsignatura.idAsignatura
        INNER JOIN Paralelo ON Paralelo.id = DocenteAsignatura.idParalelo
        where Persona.id = ? and DocenteAsignatura.idPeriodoLectivo = ?
        order by Asignatura.nombre, Paralelo.descripcion;";
        $parametros = array($persona, $periodoLectivo);
        $respuesta = $this->conexion->ejecutarConsulta($sql, $parametros);
        return $respuesta;
   }
}