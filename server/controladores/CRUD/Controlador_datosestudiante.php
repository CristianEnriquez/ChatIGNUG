<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/DatosEstudiante.php');
class Controlador_datosestudiante extends Controlador_Base
{
   function crear($args)
   {
      $datosestudiante = new DatosEstudiante($args["id"],$args["idEstudiante"],$args["descripcion"],$args["dato"]);
      $sql = "INSERT INTO DatosEstudiante (idEstudiante,descripcion,dato) VALUES (?,?,?);";
      $parametros = array($datosestudiante->idEstudiante,$datosestudiante->descripcion,$datosestudiante->dato);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $datosestudiante = new DatosEstudiante($args["id"],$args["idEstudiante"],$args["descripcion"],$args["dato"]);
      $parametros = array($datosestudiante->idEstudiante,$datosestudiante->descripcion,$datosestudiante->dato,$datosestudiante->id);
      $sql = "UPDATE DatosEstudiante SET idEstudiante = ?,descripcion = ?,dato = ? WHERE id = ?;";
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
      $sql = "DELETE FROM DatosEstudiante WHERE id = ?;";
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
         $sql = "SELECT * FROM DatosEstudiante;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM DatosEstudiante WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM DatosEstudiante LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM DatosEstudiante;";
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
            $sql = "SELECT * FROM DatosEstudiante WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM DatosEstudiante WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM DatosEstudiante WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM DatosEstudiante WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}