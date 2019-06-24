<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Titulo.php');
class Controlador_titulo extends Controlador_Base
{
   function crear($args)
   {
      $titulo = new Titulo($args["id"],$args["idPersona"],$args["idInstitucion"],$args["codigoRegistro"],$args["idNivelTitulo"]);
      $sql = "INSERT INTO Titulo (idPersona,idInstitucion,codigoRegistro,idNivelTitulo) VALUES (?,?,?,?);";
      $parametros = array($titulo->idPersona,$titulo->idInstitucion,$titulo->codigoRegistro,$titulo->idNivelTitulo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $titulo = new Titulo($args["id"],$args["idPersona"],$args["idInstitucion"],$args["codigoRegistro"],$args["idNivelTitulo"]);
      $parametros = array($titulo->idPersona,$titulo->idInstitucion,$titulo->codigoRegistro,$titulo->idNivelTitulo,$titulo->id);
      $sql = "UPDATE Titulo SET idPersona = ?,idInstitucion = ?,codigoRegistro = ?,idNivelTitulo = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Titulo WHERE id = ?;";
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
         $sql = "SELECT * FROM Titulo;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Titulo WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Titulo LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Titulo;";
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
            $sql = "SELECT * FROM Titulo WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Titulo WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Titulo WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Titulo WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}