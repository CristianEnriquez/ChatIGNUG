<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Malla.php');
class Controlador_malla extends Controlador_Base
{
   function crear($args)
   {
      $malla = new Malla($args["id"],$args["fechaMallaInicio"],$args["fechaMallaFin"],$args["idCarrera"],$args["idDocResolucion"]);
      $sql = "INSERT INTO Malla (fechaMallaInicio,fechaMallaFin,idCarrera,idDocResolucion) VALUES (?,?,?,?);";
      $fechaMallaInicioNoSQLTime = strtotime($malla->fechaMallaInicio);
      $fechaMallaInicioSQLTime = date("Y-m-d H:i:s", $fechaMallaInicioNoSQLTime);
      $malla->fechaMallaInicio = $fechaMallaInicioSQLTime;
      $fechaMallaFinNoSQLTime = strtotime($malla->fechaMallaFin);
      $fechaMallaFinSQLTime = date("Y-m-d H:i:s", $fechaMallaFinNoSQLTime);
      $malla->fechaMallaFin = $fechaMallaFinSQLTime;
      $parametros = array($malla->fechaMallaInicio,$malla->fechaMallaFin,$malla->idCarrera,$malla->idDocResolucion);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $malla = new Malla($args["id"],$args["fechaMallaInicio"],$args["fechaMallaFin"],$args["idCarrera"],$args["idDocResolucion"]);
      $parametros = array($malla->fechaMallaInicio,$malla->fechaMallaFin,$malla->idCarrera,$malla->idDocResolucion,$malla->id);
      $sql = "UPDATE Malla SET fechaMallaInicio = ?,fechaMallaFin = ?,idCarrera = ?,idDocResolucion = ? WHERE id = ?;";
      $fechaMallaInicioNoSQLTime = strtotime($malla->fechaMallaInicio);
      $fechaMallaInicioSQLTime = date("Y-m-d H:i:s", $fechaMallaInicioNoSQLTime);
      $malla->fechaMallaInicio = $fechaMallaInicioSQLTime;
      $fechaMallaFinNoSQLTime = strtotime($malla->fechaMallaFin);
      $fechaMallaFinSQLTime = date("Y-m-d H:i:s", $fechaMallaFinNoSQLTime);
      $malla->fechaMallaFin = $fechaMallaFinSQLTime;
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
      $sql = "DELETE FROM Malla WHERE id = ?;";
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
         $sql = "SELECT * FROM Malla;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Malla WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Malla LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Malla;";
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
            $sql = "SELECT * FROM Malla WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Malla WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Malla WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Malla WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}