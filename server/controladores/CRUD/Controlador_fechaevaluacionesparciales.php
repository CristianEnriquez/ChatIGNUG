<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/fechaEvaluacionesParciales.php');
class Controlador_fechaevaluacionesparciales extends Controlador_Base
{
   function crear($args)
   {
      $fechaevaluacionesparciales = new fechaEvaluacionesParciales($args["id"],$args["fechaParcial1"],$args["fechaEvaluacionParcial1"],$args["fechaEvaluacionParcial2"],$args["idMalla"],$args["idPeriodoLectivo"]);
      $sql = "INSERT INTO fechaEvaluacionesParciales (fechaParcial1,fechaEvaluacionParcial1,fechaEvaluacionParcial2,idMalla,idPeriodoLectivo) VALUES (?,?,?,?,?);";
      $fechaParcial1NoSQLTime = strtotime($fechaevaluacionesparciales->fechaParcial1);
      $fechaParcial1SQLTime = date("Y-m-d", $fechaParcial1NoSQLTime);
      $fechaevaluacionesparciales->fechaParcial1 = $fechaParcial1SQLTime;
      $fechaEvaluacionParcial1NoSQLTime = strtotime($fechaevaluacionesparciales->fechaEvaluacionParcial1);
      $fechaEvaluacionParcial1SQLTime = date("Y-m-d", $fechaEvaluacionParcial1NoSQLTime);
      $fechaevaluacionesparciales->fechaEvaluacionParcial1 = $fechaEvaluacionParcial1SQLTime;
      $fechaEvaluacionParcial2NoSQLTime = strtotime($fechaevaluacionesparciales->fechaEvaluacionParcial2);
      $fechaEvaluacionParcial2SQLTime = date("Y-m-d", $fechaEvaluacionParcial2NoSQLTime);
      $fechaevaluacionesparciales->fechaEvaluacionParcial2 = $fechaEvaluacionParcial2SQLTime;
      $parametros = array($fechaevaluacionesparciales->fechaParcial1,$fechaevaluacionesparciales->fechaEvaluacionParcial1,$fechaevaluacionesparciales->fechaEvaluacionParcial2,$fechaevaluacionesparciales->idMalla,$fechaevaluacionesparciales->idPeriodoLectivo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $fechaevaluacionesparciales = new fechaEvaluacionesParciales($args["id"],$args["fechaParcial1"],$args["fechaEvaluacionParcial1"],$args["fechaEvaluacionParcial2"],$args["idMalla"],$args["idPeriodoLectivo"]);
      $parametros = array($fechaevaluacionesparciales->fechaParcial1,$fechaevaluacionesparciales->fechaEvaluacionParcial1,$fechaevaluacionesparciales->fechaEvaluacionParcial2,$fechaevaluacionesparciales->idMalla,$fechaevaluacionesparciales->idPeriodoLectivo,$fechaevaluacionesparciales->id);
      $sql = "UPDATE fechaEvaluacionesParciales SET fechaParcial1 = ?,fechaEvaluacionParcial1 = ?,fechaEvaluacionParcial2 = ?,idMalla = ?,idPeriodoLectivo = ? WHERE id = ?;";
      $fechaParcial1NoSQLTime = strtotime($fechaevaluacionesparciales->fechaParcial1);
      $fechaParcial1SQLTime = date("Y-m-d", $fechaParcial1NoSQLTime);
      $fechaevaluacionesparciales->fechaParcial1 = $fechaParcial1SQLTime;
      $fechaEvaluacionParcial1NoSQLTime = strtotime($fechaevaluacionesparciales->fechaEvaluacionParcial1);
      $fechaEvaluacionParcial1SQLTime = date("Y-m-d", $fechaEvaluacionParcial1NoSQLTime);
      $fechaevaluacionesparciales->fechaEvaluacionParcial1 = $fechaEvaluacionParcial1SQLTime;
      $fechaEvaluacionParcial2NoSQLTime = strtotime($fechaevaluacionesparciales->fechaEvaluacionParcial2);
      $fechaEvaluacionParcial2SQLTime = date("Y-m-d", $fechaEvaluacionParcial2NoSQLTime);
      $fechaevaluacionesparciales->fechaEvaluacionParcial2 = $fechaEvaluacionParcial2SQLTime;
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
      $sql = "DELETE FROM fechaEvaluacionesParciales WHERE id = ?;";
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
         $sql = "SELECT * FROM fechaEvaluacionesParciales;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM fechaEvaluacionesParciales WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM fechaEvaluacionesParciales LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM fechaEvaluacionesParciales;";
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
            $sql = "SELECT * FROM fechaEvaluacionesParciales WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM fechaEvaluacionesParciales WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM fechaEvaluacionesParciales WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM fechaEvaluacionesParciales WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}