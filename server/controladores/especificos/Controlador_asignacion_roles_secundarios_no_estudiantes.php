<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_asignacion_roles_secundarios_no_estudiantes extends Controlador_Base
{
   function consultar()
   { 
        $sql = "SELECT id as 'idPersona', CONCAT(apellido1,' ',apellido2,' ', nombre1,' ',nombre2) as 'nombreCompleto' FROM Persona WHERE id NOT IN (SELECT DISTINCT(idPersona) FROM Cuenta WHERE Cuenta.idRol = '2') ORDER BY nombreCompleto ASC;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}