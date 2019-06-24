<?php
include_once('../controladores/Controlador_Base.php');
//include_once('../entidades/especificos/ListaEstudiante.php');
class Controlador_lista_estudiante extends Controlador_Base
{
   function leer_lista($args)
   { 
        $idCarrera = $args["idCarrera"];
        $sql = "SELECT Persona.apellido1, Persona.apellido2, Persona.nombre1, Persona.nombre2 FROM Persona
        INNER JOIN Matricula ON Matricula.idPersona = Persona.id
        WHERE Matricula.idCarrera = ?;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql, $parametros);
        return $respuesta;
   }
}