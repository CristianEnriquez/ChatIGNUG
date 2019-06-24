<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PlanSemanaActividades.php');
class Controlador_plansemanaactividades extends Controlador_Base
{
   function crear($args)
   {
      $plansemanaactividades = new PlanSemanaActividades($args["id"],$args["descripcion"],$args["idPlanSemana"]);
      $sql = "INSERT INTO PlanSemanaActividades (descripcion,idPlanSemana) VALUES (?,?);";
      $parametros = array($plansemanaactividades->descripcion,$plansemanaactividades->idPlanSemana);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $plansemanaactividades = new PlanSemanaActividades($args["id"],$args["descripcion"],$args["idPlanSemana"]);
      $parametros = array($plansemanaactividades->descripcion,$plansemanaactividades->idPlanSemana,$plansemanaactividades->id);
      $sql = "UPDATE PlanSemanaActividades SET descripcion = ?,idPlanSemana = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PlanSemanaActividades WHERE id = ?;";
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
         $sql = "SELECT * FROM PlanSemanaActividades;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PlanSemanaActividades WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PlanSemanaActividades LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PlanSemanaActividades;";
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
            $sql = "SELECT * FROM PlanSemanaActividades WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PlanSemanaActividades WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PlanSemanaActividades WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PlanSemanaActividades WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}