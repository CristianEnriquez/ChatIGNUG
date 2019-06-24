<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PlanSemanaRecursoDidactico.php');
class Controlador_plansemanarecursodidactico extends Controlador_Base
{
   function crear($args)
   {
      $plansemanarecursodidactico = new PlanSemanaRecursoDidactico($args["id"],$args["idSilaboRecursoDidactico"],$args["idPlanSemana"]);
      $sql = "INSERT INTO PlanSemanaRecursoDidactico (idSilaboRecursoDidactico,idPlanSemana) VALUES (?,?);";
      $parametros = array($plansemanarecursodidactico->idSilaboRecursoDidactico,$plansemanarecursodidactico->idPlanSemana);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $plansemanarecursodidactico = new PlanSemanaRecursoDidactico($args["id"],$args["idSilaboRecursoDidactico"],$args["idPlanSemana"]);
      $parametros = array($plansemanarecursodidactico->idSilaboRecursoDidactico,$plansemanarecursodidactico->idPlanSemana,$plansemanarecursodidactico->id);
      $sql = "UPDATE PlanSemanaRecursoDidactico SET idSilaboRecursoDidactico = ?,idPlanSemana = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PlanSemanaRecursoDidactico WHERE id = ?;";
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
         $sql = "SELECT * FROM PlanSemanaRecursoDidactico;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PlanSemanaRecursoDidactico WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PlanSemanaRecursoDidactico LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PlanSemanaRecursoDidactico;";
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
            $sql = "SELECT * FROM PlanSemanaRecursoDidactico WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PlanSemanaRecursoDidactico WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PlanSemanaRecursoDidactico WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PlanSemanaRecursoDidactico WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}