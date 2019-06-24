<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Enfermedad.php');
class Controlador_enfermedad extends Controlador_Base
{
   function crear($args)
   {
      $enfermedad = new Enfermedad($args["id"],$args["descripcion"],$args["observaciones"],$args["tratamiento"]);
      $sql = "INSERT INTO Enfermedad (descripcion,observaciones,tratamiento) VALUES (?,?,?);";
      $parametros = array($enfermedad->descripcion,$enfermedad->observaciones,$enfermedad->tratamiento);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $enfermedad = new Enfermedad($args["id"],$args["descripcion"],$args["observaciones"],$args["tratamiento"]);
      $parametros = array($enfermedad->descripcion,$enfermedad->observaciones,$enfermedad->tratamiento,$enfermedad->id);
      $sql = "UPDATE Enfermedad SET descripcion = ?,observaciones = ?,tratamiento = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Enfermedad WHERE id = ?;";
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
         $sql = "SELECT * FROM Enfermedad;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Enfermedad WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Enfermedad LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Enfermedad;";
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
            $sql = "SELECT * FROM Enfermedad WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Enfermedad WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Enfermedad WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Enfermedad WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}