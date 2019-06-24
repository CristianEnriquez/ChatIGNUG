<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PeriodoLectivo.php');
class Controlador_periodolectivo extends Controlador_Base
{
      function crear($args)
      {
         $periodolectivo = new PeriodoLectivo($args["id"],$args["descripcion"],$args["fechaInicio"],$args["fechaFin"],$args["matriculable"],$args["codigo"],$args["ordinal"]);
         $sql = "INSERT INTO PeriodoLectivo (descripcion,fechaInicio,fechaFin,matriculable,codigo,ordinal) VALUES (?,?,?,?,?,?);";
         $fechaInicioNoSQLTime = strtotime($periodolectivo->fechaInicio);
         $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
         $periodolectivo->fechaInicio = $fechaInicioSQLTime;
         $fechaFinNoSQLTime = strtotime($periodolectivo->fechaFin);
         $fechaFinSQLTime = date("Y-m-d H:i:s", $fechaFinNoSQLTime);
         $periodolectivo->fechaFin = $fechaFinSQLTime;
         $parametros = array($periodolectivo->descripcion,$periodolectivo->fechaInicio,$periodolectivo->fechaFin,$periodolectivo->matriculable,$periodolectivo->codigo,$periodolectivo->ordinal);
         $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
         if(is_null($respuesta[0])){
            return true;
         }else{
            return false;
         }
      }
   
      function actualizar($args)
      {
         $periodolectivo = new PeriodoLectivo($args["id"],$args["descripcion"],$args["fechaInicio"],$args["fechaFin"],$args["matriculable"],$args["codigo"],$args["ordinal"]);
         $fechaInicioNoSQLTime = strtotime($periodolectivo->fechaInicio);
         $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
         $periodolectivo->fechaInicio = $fechaInicioSQLTime;
         $fechaFinNoSQLTime = strtotime($periodolectivo->fechaFin);
         $fechaFinSQLTime = date("Y-m-d H:i:s", $fechaFinNoSQLTime);
         $periodolectivo->fechaFin = $fechaFinSQLTime;
         $parametros = array($periodolectivo->descripcion,$periodolectivo->fechaInicio,$periodolectivo->fechaFin,$periodolectivo->matriculable,$periodolectivo->codigo,$periodolectivo->ordinal,$periodolectivo->id);
         $sql = "UPDATE PeriodoLectivo SET descripcion = ?,fechaInicio = ?,fechaFin = ?,matriculable = ?,codigo = ?,ordinal = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PeriodoLectivo WHERE id = ?;";
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
         $sql = "SELECT * FROM PeriodoLectivo;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PeriodoLectivo WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PeriodoLectivo LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PeriodoLectivo;";
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
            $sql = "SELECT * FROM PeriodoLectivo WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PeriodoLectivo WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PeriodoLectivo WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PeriodoLectivo WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}