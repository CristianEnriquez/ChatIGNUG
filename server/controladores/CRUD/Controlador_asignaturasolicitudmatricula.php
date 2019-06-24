<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/AsignaturaSolicitudMatricula.php');
class Controlador_asignaturasolicitudmatricula extends Controlador_Base
{
   function crear($args)
   {
      $asignaturasolicitudmatricula = new AsignaturaSolicitudMatricula($args["id"],$args["idSolicitudMatricula"],$args["idAsignatura"]);
      $sql = "INSERT INTO AsignaturaSolicitudMatricula (idSolicitudMatricula,idAsignatura) VALUES (?,?);";
      $parametros = array($asignaturasolicitudmatricula->idSolicitudMatricula,$asignaturasolicitudmatricula->idAsignatura);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $asignaturasolicitudmatricula = new AsignaturaSolicitudMatricula($args["id"],$args["idSolicitudMatricula"],$args["idAsignatura"]);
      $parametros = array($asignaturasolicitudmatricula->idSolicitudMatricula,$asignaturasolicitudmatricula->idAsignatura,$asignaturasolicitudmatricula->id);
      $sql = "UPDATE AsignaturaSolicitudMatricula SET idSolicitudMatricula = ?,idAsignatura = ? WHERE id = ?;";
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
      $sql = "DELETE FROM AsignaturaSolicitudMatricula WHERE id = ?;";
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
         $sql = "SELECT * FROM AsignaturaSolicitudMatricula;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM AsignaturaSolicitudMatricula WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM AsignaturaSolicitudMatricula LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM AsignaturaSolicitudMatricula;";
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
            $sql = "SELECT * FROM AsignaturaSolicitudMatricula WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM AsignaturaSolicitudMatricula WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM AsignaturaSolicitudMatricula WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM AsignaturaSolicitudMatricula WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}