<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/TipoInstitucionProcedencia.php');
class Controlador_tipoinstitucionprocedencia extends Controlador_Base
{
   function crear($args)
   {
      $tipoinstitucionprocedencia = new TipoInstitucionProcedencia($args["id"],$args["descripcion"]);
      $sql = "INSERT INTO TipoInstitucionProcedencia (descripcion) VALUES (?);";
      $parametros = array($tipoinstitucionprocedencia->descripcion);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $tipoinstitucionprocedencia = new TipoInstitucionProcedencia($args["id"],$args["descripcion"]);
      $parametros = array($tipoinstitucionprocedencia->descripcion,$tipoinstitucionprocedencia->id);
      $sql = "UPDATE TipoInstitucionProcedencia SET descripcion = ? WHERE id = ?;";
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
      $sql = "DELETE FROM TipoInstitucionProcedencia WHERE id = ?;";
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
         $sql = "SELECT * FROM TipoInstitucionProcedencia;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM TipoInstitucionProcedencia WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM TipoInstitucionProcedencia LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM TipoInstitucionProcedencia;";
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
            $sql = "SELECT * FROM TipoInstitucionProcedencia WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM TipoInstitucionProcedencia WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM TipoInstitucionProcedencia WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM TipoInstitucionProcedencia WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}