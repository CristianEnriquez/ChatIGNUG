<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/CargoCarrera.php');
class Controlador_cargocarrera extends Controlador_Base
{
   function crear($args)
   {
      $cargocarrera = new CargoCarrera($args["id"],$args["idCarrera"],$args["idPersona"],$args["idCargo"],$args["fechaInicio"],$args["fechaFin"]);
      $sql = "INSERT INTO CargoCarrera (idCarrera,idPersona,idCargo,fechaInicio,fechaFin) VALUES (?,?,?,?,?);";
      $fechaInicioNoSQLTime = strtotime($cargocarrera->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d", $fechaInicioNoSQLTime);
      $cargocarrera->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($cargocarrera->fechaFin);
      $fechaFinSQLTime = date("Y-m-d", $fechaFinNoSQLTime);
      $cargocarrera->fechaFin = $fechaFinSQLTime;
      $parametros = array($cargocarrera->idCarrera,$cargocarrera->idPersona,$cargocarrera->idCargo,$cargocarrera->fechaInicio,$cargocarrera->fechaFin);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $cargocarrera = new CargoCarrera($args["id"],$args["idCarrera"],$args["idPersona"],$args["idCargo"],$args["fechaInicio"],$args["fechaFin"]);
      $parametros = array($cargocarrera->idCarrera,$cargocarrera->idPersona,$cargocarrera->idCargo,$cargocarrera->fechaInicio,$cargocarrera->fechaFin,$cargocarrera->id);
      $sql = "UPDATE CargoCarrera SET idCarrera = ?,idPersona = ?,idCargo = ?,fechaInicio = ?,fechaFin = ? WHERE id = ?;";
      $fechaInicioNoSQLTime = strtotime($cargocarrera->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d", $fechaInicioNoSQLTime);
      $cargocarrera->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($cargocarrera->fechaFin);
      $fechaFinSQLTime = date("Y-m-d", $fechaFinNoSQLTime);
      $cargocarrera->fechaFin = $fechaFinSQLTime;
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
      $sql = "DELETE FROM CargoCarrera WHERE id = ?;";
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
         $sql = "SELECT * FROM CargoCarrera;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM CargoCarrera WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM CargoCarrera LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM CargoCarrera;";
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
            $sql = "SELECT * FROM CargoCarrera WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM CargoCarrera WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM CargoCarrera WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM CargoCarrera WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}