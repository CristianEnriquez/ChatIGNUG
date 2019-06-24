<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SilaboEvidenciasRa.php');
class Controlador_silaboevidenciasra extends Controlador_Base
{
   function crear($args)
   {
      $silaboevidenciasra = new SilaboEvidenciasRa($args["id"],$args["idSilaboResultados"],$args["descripcion"],$args["codigo"]);
      $sql = "INSERT INTO SilaboEvidenciasRa (idSilaboResultados,descripcion,codigo) VALUES (?,?,?);";
      $parametros = array($silaboevidenciasra->idSilaboResultados,$silaboevidenciasra->descripcion,$silaboevidenciasra->codigo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silaboevidenciasra = new SilaboEvidenciasRa($args["id"],$args["idSilaboResultados"],$args["descripcion"],$args["codigo"]);
      $parametros = array($silaboevidenciasra->idSilaboResultados,$silaboevidenciasra->descripcion,$silaboevidenciasra->codigo,$silaboevidenciasra->id);
      $sql = "UPDATE SilaboEvidenciasRa SET idSilaboResultados = ?,descripcion = ?,codigo = ? WHERE id = ?;";
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
      $sql = "DELETE FROM SilaboEvidenciasRa WHERE id = ?;";
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
         $sql = "SELECT * FROM SilaboEvidenciasRa;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SilaboEvidenciasRa WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SilaboEvidenciasRa LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SilaboEvidenciasRa;";
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
            $sql = "SELECT * FROM SilaboEvidenciasRa WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SilaboEvidenciasRa WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SilaboEvidenciasRa WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SilaboEvidenciasRa WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}