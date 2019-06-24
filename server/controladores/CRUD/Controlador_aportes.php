<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Aportes.php');
class Controlador_aportes extends Controlador_Base
{
   function crear($args)
   {
      $aportes = new Aportes($args["id"],$args["nota"],$args["idDetalleAporte"],$args["idMatriculaAsignatura"]);
      $sql = "INSERT INTO Aportes (nota,idDetalleAporte,idMatriculaAsignatura) VALUES (?,?,?);";
      $parametros = array($aportes->nota,$aportes->idDetalleAporte,$aportes->idMatriculaAsignatura);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $aportes = new Aportes($args["id"],$args["nota"],$args["idDetalleAporte"],$args["idMatriculaAsignatura"]);
      $parametros = array($aportes->nota,$aportes->idDetalleAporte,$aportes->idMatriculaAsignatura,$aportes->id);
      $sql = "UPDATE Aportes SET nota = ?,idDetalleAporte = ?,idMatriculaAsignatura = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Aportes WHERE id = ?;";
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
         $sql = "SELECT * FROM Aportes;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Aportes WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Aportes LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Aportes;";
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
            $sql = "SELECT * FROM Aportes WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Aportes WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Aportes WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Aportes WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}