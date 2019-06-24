<?php
include_once('../controladores/Controlador_Base.php');
//include_once('../entidades/especificos/AsignaturaDocente.php');
class Controlador_asignatura_docente extends Controlador_Base
{
   function leer($args)
   { 
       $idPersona = $args["idPersona"];
       $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT DocenteAsignatura.id AS idDocenteAsignatura, Asignatura.id AS idAsignatura, DocenteAsignatura.idParalelo, 
        CONCAT(Asignatura.nombre, \"    Paralelo: \", Paralelo.descripcion) as nombre 
        FROM DocenteAsignatura 
        INNER JOIN (Docente INNER JOIN Persona ON Persona.id = Docente.idPersona) ON Docente.id = DocenteAsignatura.idDocente
        INNER JOIN (Asignatura INNER JOIN Malla ON Malla.id = Asignatura.idMalla) ON Asignatura.id = DocenteAsignatura.idAsignatura
        INNER JOIN Paralelo ON Paralelo.id = DocenteAsignatura.idParalelo
        WHERE Persona.id = ? AND DocenteAsignatura.idPeriodoLectivo = ?
        ORDER BY Asignatura.nombre, Paralelo.descripcion;";
        $parametros = array($idPersona, $idPeriodoLectivo);
        $respuesta = $this->conexion->ejecutarConsulta($sql, $parametros);
        return $respuesta;
   }
}