<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/AsignaturaPrerrequisito.php');
class Controlador_asignaturaprerrequisito extends Controlador_Base
{
   function crear($args)
   {
      $asignaturaprerrequisito = new AsignaturaPrerrequisito($args["id"],$args["idAsignatura"],$args["idAsignaturaPrerequisito"]);
      $sql = "INSERT INTO AsignaturaPrerrequisito (idAsignatura,idAsignaturaPrerequisito) VALUES (?,?);";
      $parametros = array($asignaturaprerrequisito->idAsignatura,$asignaturaprerrequisito->idAsignaturaPrerequisito);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $asignaturaprerrequisito = new AsignaturaPrerrequisito($args["id"],$args["idAsignatura"],$args["idAsignaturaPrerequisito"]);
      $parametros = array($asignaturaprerrequisito->idAsignatura,$asignaturaprerrequisito->idAsignaturaPrerequisito,$asignaturaprerrequisito->id);
      $sql = "UPDATE AsignaturaPrerrequisito SET idAsignatura = ?,idAsignaturaPrerequisito = ? WHERE id = ?;";
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
      $sql = "DELETE FROM AsignaturaPrerrequisito WHERE id = ?;";
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
         $sql = "SELECT * FROM AsignaturaPrerrequisito;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM AsignaturaPrerrequisito WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM AsignaturaPrerrequisito LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM AsignaturaPrerrequisito;";
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
            $sql = "SELECT * FROM AsignaturaPrerrequisito WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM AsignaturaPrerrequisito WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM AsignaturaPrerrequisito WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM AsignaturaPrerrequisito WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}