<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/AsignaturaCorrequisito.php');
class Controlador_asignaturacorrequisito extends Controlador_Base
{
   function crear($args)
   {
      $asignaturacorrequisito = new AsignaturaCorrequisito($args["id"],$args["idAsignatura"],$args["idAsignaturaCorrequisito"]);
      $sql = "INSERT INTO AsignaturaCorrequisito (idAsignatura,idAsignaturaCorrequisito) VALUES (?,?);";
      $parametros = array($asignaturacorrequisito->idAsignatura,$asignaturacorrequisito->idAsignaturaCorrequisito);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $asignaturacorrequisito = new AsignaturaCorrequisito($args["id"],$args["idAsignatura"],$args["idAsignaturaCorrequisito"]);
      $parametros = array($asignaturacorrequisito->idAsignatura,$asignaturacorrequisito->idAsignaturaCorrequisito,$asignaturacorrequisito->id);
      $sql = "UPDATE AsignaturaCorrequisito SET idAsignatura = ?,idAsignaturaCorrequisito = ? WHERE id = ?;";
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
      $sql = "DELETE FROM AsignaturaCorrequisito WHERE id = ?;";
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
         $sql = "SELECT * FROM AsignaturaCorrequisito;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM AsignaturaCorrequisito WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM AsignaturaCorrequisito LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM AsignaturaCorrequisito;";
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
            $sql = "SELECT * FROM AsignaturaCorrequisito WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM AsignaturaCorrequisito WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM AsignaturaCorrequisito WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM AsignaturaCorrequisito WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}