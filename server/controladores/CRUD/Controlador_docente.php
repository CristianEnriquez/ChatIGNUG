<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Docente.php');
class Controlador_docente extends Controlador_Base
{
   function crear($args)
   {
      $docente = new Docente($args["id"],$args["idPersona"],$args["fechaInicio"],$args["idEstado"]);
      $sql = "INSERT INTO Docente (idPersona,fechaInicio,idEstado) VALUES (?,?,?);";
      $fechaInicioNoSQLTime = strtotime($docente->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
      $docente->fechaInicio = $fechaInicioSQLTime;
      $parametros = array($docente->idPersona,$docente->fechaInicio,$docente->idEstado);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $docente = new Docente($args["id"],$args["idPersona"],$args["fechaInicio"],$args["idEstado"]);
      $parametros = array($docente->idPersona,$docente->fechaInicio,$docente->idEstado,$docente->id);
      $sql = "UPDATE Docente SET idPersona = ?,fechaInicio = ?,idEstado = ? WHERE id = ?;";
      $fechaInicioNoSQLTime = strtotime($docente->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
      $docente->fechaInicio = $fechaInicioSQLTime;
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
      $sql = "DELETE FROM Docente WHERE id = ?;";
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
         $sql = "SELECT * FROM Docente;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Docente WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Docente LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Docente;";
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
            $sql = "SELECT * FROM Docente WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Docente WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Docente WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Docente WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}