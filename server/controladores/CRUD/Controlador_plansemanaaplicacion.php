<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PlanSemanaAplicacion.php');
class Controlador_plansemanaaplicacion extends Controlador_Base
{
   function crear($args)
   {
      $plansemanaaplicacion = new PlanSemanaAplicacion($args["id"],$args["idSilaboResultados"],$args["idPlanSemana"]);
      $sql = "INSERT INTO PlanSemanaAplicacion (idSilaboResultados,idPlanSemana) VALUES (?,?);";
      $parametros = array($plansemanaaplicacion->idSilaboResultados,$plansemanaaplicacion->idPlanSemana);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $plansemanaaplicacion = new PlanSemanaAplicacion($args["id"],$args["idSilaboResultados"],$args["idPlanSemana"]);
      $parametros = array($plansemanaaplicacion->idSilaboResultados,$plansemanaaplicacion->idPlanSemana,$plansemanaaplicacion->id);
      $sql = "UPDATE PlanSemanaAplicacion SET idSilaboResultados = ?,idPlanSemana = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PlanSemanaAplicacion WHERE id = ?;";
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
         $sql = "SELECT * FROM PlanSemanaAplicacion;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PlanSemanaAplicacion WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PlanSemanaAplicacion LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PlanSemanaAplicacion;";
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
            $sql = "SELECT * FROM PlanSemanaAplicacion WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PlanSemanaAplicacion WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PlanSemanaAplicacion WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PlanSemanaAplicacion WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}