<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Matricula.php');
class Controlador_matricula extends Controlador_Base
{
   function crear($args)
   {
      $matricula = new Matricula($args["id"],$args["codigo"],$args["fecha"],$args["idPeriodoLectivo"],$args["idPersona"],$args["idCarrera"],$args["numeroMatricula"],$args["folio"],$args["idJornada"],$args["idTipoMatricula"],$args["paralelo"],$args["nivel"]);
      $sql = "INSERT INTO Matricula (codigo,fecha,idPeriodoLectivo,idPersona,idCarrera,numeroMatricula,folio,idJornada,idTipoMatricula,paralelo,nivel) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
      $fechaNoSQLTime = strtotime($matricula->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $matricula->fecha = $fechaSQLTime;
      $parametros = array($matricula->codigo,$matricula->fecha,$matricula->idPeriodoLectivo,$matricula->idPersona,$matricula->idCarrera,$matricula->numeroMatricula,$matricula->folio,$matricula->idJornada,$matricula->idTipoMatricula,$matricula->paralelo,$matricula->nivel);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $matricula = new Matricula($args["id"],$args["codigo"],$args["fecha"],$args["idPeriodoLectivo"],$args["idPersona"],$args["idCarrera"],$args["numeroMatricula"],$args["folio"],$args["idJornada"],$args["idTipoMatricula"],$args["paralelo"],$args["nivel"]);
      $fechaNoSQLTime = strtotime($matricula->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $matricula->fecha = $fechaSQLTime;
      $parametros = array($matricula->codigo,$matricula->fecha,$matricula->idPeriodoLectivo,$matricula->idPersona,$matricula->idCarrera,$matricula->numeroMatricula,$matricula->folio,$matricula->idJornada,$matricula->idTipoMatricula,$matricula->paralelo,$matricula->nivel,$matricula->id);
      $sql = "UPDATE Matricula SET codigo = ?,fecha = ?,idPeriodoLectivo = ?,idPersona = ?,idCarrera = ?,numeroMatricula = ?,folio = ?,idJornada = ?,idTipoMatricula = ?,paralelo = ?,nivel = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Matricula WHERE id = ?;";
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
         $sql = "SELECT * FROM Matricula;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Matricula WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Matricula LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Matricula;";
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
            $sql = "SELECT * FROM Matricula WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Matricula WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Matricula WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Matricula WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}