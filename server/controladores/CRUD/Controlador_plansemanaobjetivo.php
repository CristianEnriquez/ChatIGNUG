<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PlanSemanaObjetivo.php');
class Controlador_plansemanaobjetivo extends Controlador_Base
{
   function crear($args)
   {
      $plansemanaobjetivo = new PlanSemanaObjetivo($args["id"],$args["objetivo1"],$args["objetivo2"],$args["objetivo3"],$args["objetivo4"],$args["idPlanSemana"]);
      $sql = "INSERT INTO PlanSemanaObjetivo (objetivo1,objetivo2,objetivo3,objetivo4,idPlanSemana) VALUES (?,?,?,?,?);";
      $parametros = array($plansemanaobjetivo->objetivo1,$plansemanaobjetivo->objetivo2,$plansemanaobjetivo->objetivo3,$plansemanaobjetivo->objetivo4,$plansemanaobjetivo->idPlanSemana);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $plansemanaobjetivo = new PlanSemanaObjetivo($args["id"],$args["objetivo1"],$args["objetivo2"],$args["objetivo3"],$args["objetivo4"],$args["idPlanSemana"]);
      $parametros = array($plansemanaobjetivo->objetivo1,$plansemanaobjetivo->objetivo2,$plansemanaobjetivo->objetivo3,$plansemanaobjetivo->objetivo4,$plansemanaobjetivo->idPlanSemana,$plansemanaobjetivo->id);
      $sql = "UPDATE PlanSemanaObjetivo SET objetivo1 = ?,objetivo2 = ?,objetivo3 = ?,objetivo4 = ?,idPlanSemana = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PlanSemanaObjetivo WHERE id = ?;";
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
         $sql = "SELECT * FROM PlanSemanaObjetivo;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PlanSemanaObjetivo WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PlanSemanaObjetivo LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PlanSemanaObjetivo;";
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
            $sql = "SELECT * FROM PlanSemanaObjetivo WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PlanSemanaObjetivo WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PlanSemanaObjetivo WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PlanSemanaObjetivo WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}