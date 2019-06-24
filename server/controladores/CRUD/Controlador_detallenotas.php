<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/DetalleNotas.php');
class Controlador_detallenotas extends Controlador_Base
{
   function crear($args)
   {
      $detallenotas = new DetalleNotas($args["id"],$args["descripcion"],$args["nota"],$args["idCateogiraNota"],$args["idNota"]);
      $sql = "INSERT INTO DetalleNotas (descripcion,nota,idCateogiraNota,idNota) VALUES (?,?,?,?);";
      $parametros = array($detallenotas->descripcion,$detallenotas->nota,$detallenotas->idCateogiraNota,$detallenotas->idNota);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $detallenotas = new DetalleNotas($args["id"],$args["descripcion"],$args["nota"],$args["idCateogiraNota"],$args["idNota"]);
      $parametros = array($detallenotas->descripcion,$detallenotas->nota,$detallenotas->idCateogiraNota,$detallenotas->idNota,$detallenotas->id);
      $sql = "UPDATE DetalleNotas SET descripcion = ?,nota = ?,idCateogiraNota = ?,idNota = ? WHERE id = ?;";
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
      $sql = "DELETE FROM DetalleNotas WHERE id = ?;";
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
         $sql = "SELECT * FROM DetalleNotas;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM DetalleNotas WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM DetalleNotas LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM DetalleNotas;";
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
            $sql = "SELECT * FROM DetalleNotas WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM DetalleNotas WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM DetalleNotas WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM DetalleNotas WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}