<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/ExperienciaLaboral.php');
class Controlador_experiencialaboral extends Controlador_Base
{
   function crear($args)
   {
      $experiencialaboral = new ExperienciaLaboral($args["id"],$args["idPersona"],$args["fechaInicio"],$args["fechaFin"],$args["descripcionCargo"],$args["descripcionFunciones"],$args["nombreEmpresa"],$args["idMotivoSalida"]);
      $sql = "INSERT INTO ExperienciaLaboral (idPersona,fechaInicio,fechaFin,descripcionCargo,descripcionFunciones,nombreEmpresa,idMotivoSalida) VALUES (?,?,?,?,?,?,?);";
      $fechaInicioNoSQLTime = strtotime($experiencialaboral->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
      $experiencialaboral->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($experiencialaboral->fechaFin);
      $fechaFinSQLTime = date("Y-m-d H:i:s", $fechaFinNoSQLTime);
      $experiencialaboral->fechaFin = $fechaFinSQLTime;
      $parametros = array($experiencialaboral->idPersona,$experiencialaboral->fechaInicio,$experiencialaboral->fechaFin,$experiencialaboral->descripcionCargo,$experiencialaboral->descripcionFunciones,$experiencialaboral->nombreEmpresa,$experiencialaboral->idMotivoSalida);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $experiencialaboral = new ExperienciaLaboral($args["id"],$args["idPersona"],$args["fechaInicio"],$args["fechaFin"],$args["descripcionCargo"],$args["descripcionFunciones"],$args["nombreEmpresa"],$args["idMotivoSalida"]);
      $parametros = array($experiencialaboral->idPersona,$experiencialaboral->fechaInicio,$experiencialaboral->fechaFin,$experiencialaboral->descripcionCargo,$experiencialaboral->descripcionFunciones,$experiencialaboral->nombreEmpresa,$experiencialaboral->idMotivoSalida,$experiencialaboral->id);
      $sql = "UPDATE ExperienciaLaboral SET idPersona = ?,fechaInicio = ?,fechaFin = ?,descripcionCargo = ?,descripcionFunciones = ?,nombreEmpresa = ?,idMotivoSalida = ? WHERE id = ?;";
      $fechaInicioNoSQLTime = strtotime($experiencialaboral->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
      $experiencialaboral->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($experiencialaboral->fechaFin);
      $fechaFinSQLTime = date("Y-m-d H:i:s", $fechaFinNoSQLTime);
      $experiencialaboral->fechaFin = $fechaFinSQLTime;
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
      $sql = "DELETE FROM ExperienciaLaboral WHERE id = ?;";
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
         $sql = "SELECT * FROM ExperienciaLaboral;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM ExperienciaLaboral WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM ExperienciaLaboral LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM ExperienciaLaboral;";
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
            $sql = "SELECT * FROM ExperienciaLaboral WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM ExperienciaLaboral WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM ExperienciaLaboral WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM ExperienciaLaboral WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}