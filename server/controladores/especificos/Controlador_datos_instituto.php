<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/especificos/DatosInstituto.php');
class Controlador_datos_instituto extends Controlador_Base
{
   function consultar($args)
   { 
        $idCarrera = $args["idCarrera"];
        $sql = "SELECT a.id, a.nombre, a.colorCarpeta, b.rector, c.vicerector FROM (SELECT Instituto.id as 'id', Instituto.descripcion as 'nombre', Instituto.color as 'colorCarpeta' FROM Instituto INNER JOIN CarreraInstituto ON CarreraInstituto.idInstituto = Instituto.id INNER JOIN Carrera ON Carrera.id = CarreraInstituto.idCarrera WHERE Carrera.id = ?) a LEFT JOIN (SELECT idInstituto as 'id', CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as 'rector' FROM CargoInstituto INNER JOIN Persona ON Persona.id = CargoInstituto.idPersona INNER JOIN Cargo ON Cargo.id = CargoInstituto.idCargo where Cargo.descripcion = 'RECTOR') b ON a.id = b.id LEFT JOIN (SELECT idInstituto as 'id', CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as 'vicerector' FROM CargoInstituto INNER JOIN Persona ON Persona.id = CargoInstituto.idPersona INNER JOIN Cargo ON Cargo.id = CargoInstituto.idCargo where Cargo.descripcion = 'VICE RECTOR') c ON a.id = c.id;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}