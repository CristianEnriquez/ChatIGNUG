<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SilaboMetodologia.php');
class Controlador_silabometodologia extends Controlador_Base
{
   function crear($args)
   {
      $silabometodologia = new SilaboMetodologia($args["id"],$args["idSilabo"],$args["idMetodologia"]);
      $sql = "INSERT INTO SilaboMetodologia (idSilabo,idMetodologia) VALUES (?,?);";
      $parametros = array($silabometodologia->idSilabo,$silabometodologia->idMetodologia);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silabometodologia = new SilaboMetodologia($args["id"],$args["idSilabo"],$args["idMetodologia"]);
      $parametros = array($silabometodologia->idSilabo,$silabometodologia->idMetodologia,$silabometodologia->id);
      $sql = "UPDATE SilaboMetodologia SET idSilabo = ?,idMetodologia = ? WHERE id = ?;";
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
      $sql = "DELETE FROM SilaboMetodologia WHERE id = ?;";
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
         $sql = "SELECT * FROM SilaboMetodologia;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SilaboMetodologia WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SilaboMetodologia LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SilaboMetodologia;";
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
            $sql = "SELECT * FROM SilaboMetodologia WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SilaboMetodologia WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SilaboMetodologia WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SilaboMetodologia WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}