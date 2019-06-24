<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Ponderacion.php');
class Controlador_ponderacion extends Controlador_Base
{
   function crear($args)
   {
      $ponderacion = new Ponderacion($args["id"],$args["idCategoria"],$args["idParcial"],$args["porcentaje"]);
      $sql = "INSERT INTO Ponderacion (idCategoria,idParcial,porcentaje) VALUES (?,?,?);";
      $parametros = array($ponderacion->idCategoria,$ponderacion->idParcial,$ponderacion->porcentaje);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $ponderacion = new Ponderacion($args["id"],$args["idCategoria"],$args["idParcial"],$args["porcentaje"]);
      $parametros = array($ponderacion->idCategoria,$ponderacion->idParcial,$ponderacion->porcentaje,$ponderacion->id);
      $sql = "UPDATE Ponderacion SET idCategoria = ?,idParcial = ?,porcentaje = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Ponderacion WHERE id = ?;";
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
         $sql = "SELECT * FROM Ponderacion;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Ponderacion WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Ponderacion LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Ponderacion;";
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
            $sql = "SELECT * FROM Ponderacion WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Ponderacion WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Ponderacion WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Ponderacion WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}