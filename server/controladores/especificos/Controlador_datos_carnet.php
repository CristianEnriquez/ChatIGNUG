<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_datos_carnet extends Controlador_Base
{
   function consultar($args)
   { 
        $identificacion = $args["identificacion"];
        $sql = "SELECT Persona.id as idPersona, Persona.identificacion, UPPER(CONCAT(Persona.apellido1,' ' , Persona.apellido2)) as 'apellidos', UPPER(CONCAT(Persona.nombre1,' ' , Persona.nombre2)) as 'nombres' FROM Persona WHERE Persona.identificacion = ?;";
        $parametros = array();
        array_push($parametros, $identificacion);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros)[0];
        $idPersona = $respuesta['idPersona'];
        $sql = "SELECT Estudiante.id FROM Estudiante WHERE idPersona = ?;";
        $parametros = array();
        array_push($parametros, $idPersona);
        $esEstudiante = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(json_encode($esEstudiante) == '[0]'){
            $cargo = 'DOCENTE';
        }else{
            $cargo = 'ESTUDIANTE';
        }
        $salida = array_merge($respuesta, ["cargo"=>$cargo]);
        return $salida;
   }
}