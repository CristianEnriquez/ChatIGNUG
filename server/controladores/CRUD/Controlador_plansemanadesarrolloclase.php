<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PlanSemanaDesarrolloClase.php');
class Controlador_plansemanadesarrolloclase extends Controlador_Base
{
   function crear($args)
   {
      $plansemanadesarrolloclase = new PlanSemanaDesarrolloClase($args["id"],$args["descripcion"],$args["tiempo"],$args["idPlanSemana"]);
      $sql = "INSERT INTO PlanSemanaDesarrolloClase (descripcion,tiempo,idPlanSemana) VALUES (?,?,?);";
      $parametros = array($plansemanadesarrolloclase->descripcion,$plansemanadesarrolloclase->tiempo,$plansemanadesarrolloclase->idPlanSemana);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $plansemanadesarrolloclase = new PlanSemanaDesarrolloClase($args["id"],$args["descripcion"],$args["tiempo"],$args["idPlanSemana"]);
      $parametros = array($plansemanadesarrolloclase->descripcion,$plansemanadesarrolloclase->tiempo,$plansemanadesarrolloclase->idPlanSemana,$plansemanadesarrolloclase->id);
      $sql = "UPDATE PlanSemanaDesarrolloClase SET descripcion = ?,tiempo = ?,idPlanSemana = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PlanSemanaDesarrolloClase WHERE id = ?;";
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
         $sql = "SELECT * FROM PlanSemanaDesarrolloClase;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PlanSemanaDesarrolloClase WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PlanSemanaDesarrolloClase LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PlanSemanaDesarrolloClase;";
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
            $sql = "SELECT * FROM PlanSemanaDesarrolloClase WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PlanSemanaDesarrolloClase WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PlanSemanaDesarrolloClase WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PlanSemanaDesarrolloClase WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}