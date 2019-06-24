<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/PorcentajeAporteFinal.php');
class Controlador_porcentajeaportefinal extends Controlador_Base
{
   function crear($args)
   {
      $porcentajeaportefinal = new PorcentajeAporteFinal($args["id"],$args["idAporteFinal"],$args["idCategoriaAporte"],$args["porcentaje"]);
      $sql = "INSERT INTO PorcentajeAporteFinal (idAporteFinal,idCategoriaAporte,porcentaje) VALUES (?,?,?);";
      $parametros = array($porcentajeaportefinal->idAporteFinal,$porcentajeaportefinal->idCategoriaAporte,$porcentajeaportefinal->porcentaje);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $porcentajeaportefinal = new PorcentajeAporteFinal($args["id"],$args["idAporteFinal"],$args["idCategoriaAporte"],$args["porcentaje"]);
      $parametros = array($porcentajeaportefinal->idAporteFinal,$porcentajeaportefinal->idCategoriaAporte,$porcentajeaportefinal->porcentaje,$porcentajeaportefinal->id);
      $sql = "UPDATE PorcentajeAporteFinal SET idAporteFinal = ?,idCategoriaAporte = ?,porcentaje = ? WHERE id = ?;";
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
      $sql = "DELETE FROM PorcentajeAporteFinal WHERE id = ?;";
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
         $sql = "SELECT * FROM PorcentajeAporteFinal;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM PorcentajeAporteFinal WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM PorcentajeAporteFinal LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM PorcentajeAporteFinal;";
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
            $sql = "SELECT * FROM PorcentajeAporteFinal WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM PorcentajeAporteFinal WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM PorcentajeAporteFinal WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM PorcentajeAporteFinal WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}