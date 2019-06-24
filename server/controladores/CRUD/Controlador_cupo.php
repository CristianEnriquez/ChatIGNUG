<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Cupo.php');
class Controlador_cupo extends Controlador_Base
{
   function crear($args)
   {
      $cupo = new Cupo($args["id"],$args["idJornadaCarrera"],$args["idPersona"],$args["idEstadoCupo"],$args["idPeriodoLectivo"],$args["fecha"],$args["idTipoMatricula"],$args["paralelo"],$args["nivel"]);
      $sql = "INSERT INTO Cupo (idJornadaCarrera,idPersona,idEstadoCupo,idPeriodoLectivo,fecha,idTipoMatricula,paralelo,nivel) VALUES (?,?,?,?,?,?,?,?);";
      $fechaNoSQLTime = strtotime($cupo->fecha);
      $fechaSQLTime = date("Y-m-d", $fechaNoSQLTime);
      $cupo->fecha = $fechaSQLTime;
      $parametros = array($cupo->idJornadaCarrera,$cupo->idPersona,$cupo->idEstadoCupo,$cupo->idPeriodoLectivo,$cupo->fecha,$cupo->idTipoMatricula,$cupo->paralelo,$cupo->nivel);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $cupo = new Cupo($args["id"],$args["idJornadaCarrera"],$args["idPersona"],$args["idEstadoCupo"],$args["idPeriodoLectivo"],$args["fecha"],$args["idTipoMatricula"],$args["paralelo"],$args["nivel"]);
      $fechaNoSQLTime = strtotime($cupo->fecha);
      $fechaSQLTime = date("Y-m-d", $fechaNoSQLTime);
      $cupo->fecha = $fechaSQLTime;
      $parametros = array($cupo->idJornadaCarrera,$cupo->idPersona,$cupo->idEstadoCupo,$cupo->idPeriodoLectivo,$cupo->fecha,$cupo->idTipoMatricula,$cupo->paralelo,$cupo->nivel,$cupo->id);
      $sql = "UPDATE Cupo SET idJornadaCarrera = ?,idPersona = ?,idEstadoCupo = ?,idPeriodoLectivo = ?,fecha = ?,idTipoMatricula = ?,paralelo = ?,nivel = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Cupo WHERE id = ?;";
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
         $sql = "SELECT * FROM Cupo;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Cupo WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Cupo LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Cupo;";
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
            $sql = "SELECT * FROM Cupo WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Cupo WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Cupo WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Cupo WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}