<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SilaboBiliografia.php');
class Controlador_silabobiliografia extends Controlador_Base
{
   function crear($args)
   {
      $silabobiliografia = new SilaboBiliografia($args["id"],$args["descripcion"],$args["tipo"]);
      $sql = "INSERT INTO SilaboBiliografia (descripcion,tipo) VALUES (?,?);";
      $parametros = array($silabobiliografia->descripcion,$silabobiliografia->tipo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silabobiliografia = new SilaboBiliografia($args["id"],$args["descripcion"],$args["tipo"]);
      $parametros = array($silabobiliografia->descripcion,$silabobiliografia->tipo,$silabobiliografia->id);
      $sql = "UPDATE SilaboBiliografia SET descripcion = ?,tipo = ? WHERE id = ?;";
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
      $sql = "DELETE FROM SilaboBiliografia WHERE id = ?;";
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
         $sql = "SELECT * FROM SilaboBiliografia;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SilaboBiliografia WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SilaboBiliografia LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SilaboBiliografia;";
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
            $sql = "SELECT * FROM SilaboBiliografia WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SilaboBiliografia WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SilaboBiliografia WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SilaboBiliografia WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}