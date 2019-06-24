<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Discapacidad.php');
class Controlador_discapacidad extends Controlador_Base
{
   function crear($args)
   {
      $discapacidad = new Discapacidad($args["id"],$args["idPersona"],$args["idTipoDiscapacidad"],$args["porcentaje"]);
      $sql = "INSERT INTO Discapacidad (idPersona,idTipoDiscapacidad,porcentaje) VALUES (?,?,?);";
      $parametros = array($discapacidad->idPersona,$discapacidad->idTipoDiscapacidad,$discapacidad->porcentaje);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $discapacidad = new Discapacidad($args["id"],$args["idPersona"],$args["idTipoDiscapacidad"],$args["porcentaje"]);
      $parametros = array($discapacidad->idPersona,$discapacidad->idTipoDiscapacidad,$discapacidad->porcentaje,$discapacidad->id);
      $sql = "UPDATE Discapacidad SET idPersona = ?,idTipoDiscapacidad = ?,porcentaje = ? WHERE id = ?;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function borrar($args)
   {
      $id = $args["id"];
      $parametros = array($id);
      $sql = "DELETE FROM Discapacidad WHERE id = ?;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function leer($args)
   {
      $id = $args["id"];
      if ($id==""){
         $sql = "SELECT * FROM Discapacidad;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Discapacidad WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Discapacidad LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Discapacidad;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta[0];
   }

   function leer_filtrado($args)
   {
      $nombreColumna = $args["columna"];
      $tipoFiltro = $args["tipo_filtro"];
      $filtro = $args["filtro"];
      switch ($tipoFiltro){
         case "coincide":
            $parametros = array($filtro);
            $sql = "SELECT * FROM Discapacidad WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Discapacidad WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Discapacidad WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Discapacidad WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}