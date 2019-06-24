<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/CargoInstituto.php');
class Controlador_cargoinstituto extends Controlador_Base
{
   function crear($args)
   {
      $cargoinstituto = new CargoInstituto($args["id"],$args["idInstituto"],$args["idPersona"],$args["idCargo"],$args["fechaInicio"],$args["fechaFin"]);
      $sql = "INSERT INTO CargoInstituto (idInstituto,idPersona,idCargo,fechaInicio,fechaFin) VALUES (?,?,?,?,?);";
      $fechaInicioNoSQLTime = strtotime($cargoinstituto->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d", $fechaInicioNoSQLTime);
      $cargoinstituto->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($cargoinstituto->fechaFin);
      $fechaFinSQLTime = date("Y-m-d", $fechaFinNoSQLTime);
      $cargoinstituto->fechaFin = $fechaFinSQLTime;
      $parametros = array($cargoinstituto->idInstituto,$cargoinstituto->idPersona,$cargoinstituto->idCargo,$cargoinstituto->fechaInicio,$cargoinstituto->fechaFin);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $cargoinstituto = new CargoInstituto($args["id"],$args["idInstituto"],$args["idPersona"],$args["idCargo"],$args["fechaInicio"],$args["fechaFin"]);
      $parametros = array($cargoinstituto->idInstituto,$cargoinstituto->idPersona,$cargoinstituto->idCargo,$cargoinstituto->fechaInicio,$cargoinstituto->fechaFin,$cargoinstituto->id);
      $sql = "UPDATE CargoInstituto SET idInstituto = ?,idPersona = ?,idCargo = ?,fechaInicio = ?,fechaFin = ? WHERE id = ?;";
      $fechaInicioNoSQLTime = strtotime($cargoinstituto->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d", $fechaInicioNoSQLTime);
      $cargoinstituto->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($cargoinstituto->fechaFin);
      $fechaFinSQLTime = date("Y-m-d", $fechaFinNoSQLTime);
      $cargoinstituto->fechaFin = $fechaFinSQLTime;
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
      $sql = "DELETE FROM CargoInstituto WHERE id = ?;";
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
         $sql = "SELECT * FROM CargoInstituto;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM CargoInstituto WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM CargoInstituto LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM CargoInstituto;";
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
            $sql = "SELECT * FROM CargoInstituto WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM CargoInstituto WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM CargoInstituto WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM CargoInstituto WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}