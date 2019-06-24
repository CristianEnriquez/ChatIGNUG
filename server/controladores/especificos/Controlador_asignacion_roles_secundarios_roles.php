<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_asignacion_roles_secundarios_roles extends Controlador_Base
{
   function consultar()
   { 
        $sql = "SELECT Roles.* FROM Roles WHERE Roles.id IN (SELECT DISTINCT(idRol) FROM RolSecundario) ORDER BY Roles.descripcion ASC;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}