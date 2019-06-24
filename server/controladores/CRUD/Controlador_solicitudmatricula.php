<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SolicitudMatricula.php');
class Controlador_solicitudmatricula extends Controlador_Base
{
   function crear($args)
   {
      $solicitudmatricula = new SolicitudMatricula($args["id"],$args["codigo"],$args["fecha"],$args["idPeriodoLectivo"],$args["idEstadoSolicitud"],$args["idPersona"],$args["idCarrera"]);
      $sql = "INSERT INTO SolicitudMatricula (codigo,fecha,idPeriodoLectivo,idEstadoSolicitud,idPersona,idCarrera) VALUES (?,?,?,?,?,?);";
      $fechaNoSQLTime = strtotime($solicitudmatricula->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $solicitudmatricula->fecha = $fechaSQLTime;
      $parametros = array($solicitudmatricula->codigo,$solicitudmatricula->fecha,$solicitudmatricula->idPeriodoLectivo,$solicitudmatricula->idEstadoSolicitud,$solicitudmatricula->idPersona,$solicitudmatricula->idCarrera);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $solicitudmatricula = new SolicitudMatricula($args["id"],$args["codigo"],$args["fecha"],$args["idPeriodoLectivo"],$args["idEstadoSolicitud"],$args["idPersona"],$args["idCarrera"]);
      $parametros = array($solicitudmatricula->codigo,$solicitudmatricula->fecha,$solicitudmatricula->idPeriodoLectivo,$solicitudmatricula->idEstadoSolicitud,$solicitudmatricula->idPersona,$solicitudmatricula->idCarrera,$solicitudmatricula->id);
      $sql = "UPDATE SolicitudMatricula SET codigo = ?,fecha = ?,idPeriodoLectivo = ?,idEstadoSolicitud = ?,idPersona = ?,idCarrera = ? WHERE id = ?;";
      $fechaNoSQLTime = strtotime($solicitudmatricula->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $solicitudmatricula->fecha = $fechaSQLTime;
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
      $sql = "DELETE FROM SolicitudMatricula WHERE id = ?;";
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
         $sql = "SELECT * FROM SolicitudMatricula;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SolicitudMatricula WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SolicitudMatricula LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SolicitudMatricula;";
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
            $sql = "SELECT * FROM SolicitudMatricula WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SolicitudMatricula WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SolicitudMatricula WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SolicitudMatricula WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}