<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/HorasClase.php');
class Controlador_horasclase extends Controlador_Base
{
   function crear($args)
   {
      $horasclase = new HorasClase($args["id"],$args["idAsignatura"],$args["idParalelo"],$args["fecha"],$args["horas"]);
      $sql = "INSERT INTO HorasClase (idAsignatura,idParalelo,fecha,horas) VALUES (?,?,?,?);";
      $fechaNoSQLTime = strtotime($horasclase->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $horasclase->fecha = $fechaSQLTime;
      $parametros = array($horasclase->idAsignatura,$horasclase->idParalelo,$horasclase->fecha,$horasclase->horas);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $horasclase = new HorasClase($args["id"],$args["idAsignatura"],$args["idParalelo"],$args["fecha"],$args["horas"]);
      $parametros = array($horasclase->idAsignatura,$horasclase->idParalelo,$horasclase->fecha,$horasclase->horas,$horasclase->id);
      $sql = "UPDATE HorasClase SET idAsignatura = ?,idParalelo = ?,fecha = ?,horas = ? WHERE id = ?;";
      $fechaNoSQLTime = strtotime($horasclase->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $horasclase->fecha = $fechaSQLTime;
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
      $sql = "DELETE FROM HorasClase WHERE id = ?;";
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
         $sql = "SELECT * FROM HorasClase;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM HorasClase WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM HorasClase LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM HorasClase;";
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
            $sql = "SELECT * FROM HorasClase WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM HorasClase WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM HorasClase WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM HorasClase WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}