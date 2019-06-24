<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/CategoriaAporte.php');
class Controlador_categoriaaporte extends Controlador_Base
{
   function crear($args)
   {
      $categoriaaporte = new CategoriaAporte($args["id"],$args["descripcion"],$args["idPadre"]);
      $sql = "INSERT INTO CategoriaAporte (descripcion,idPadre) VALUES (?,?);";
      $parametros = array($categoriaaporte->descripcion,$categoriaaporte->idPadre);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $categoriaaporte = new CategoriaAporte($args["id"],$args["descripcion"],$args["idPadre"]);
      $parametros = array($categoriaaporte->descripcion,$categoriaaporte->idPadre,$categoriaaporte->id);
      $sql = "UPDATE CategoriaAporte SET descripcion = ?,idPadre = ? WHERE id = ?;";
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
      $sql = "DELETE FROM CategoriaAporte WHERE id = ?;";
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
         $sql = "SELECT * FROM CategoriaAporte;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM CategoriaAporte WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM CategoriaAporte LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM CategoriaAporte;";
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
            $sql = "SELECT * FROM CategoriaAporte WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM CategoriaAporte WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM CategoriaAporte WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM CategoriaAporte WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}