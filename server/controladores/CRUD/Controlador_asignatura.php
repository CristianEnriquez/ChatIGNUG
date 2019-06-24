<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Asignatura.php');
class Controlador_asignatura extends Controlador_Base
{
   function crear($args)
   {
      $asignatura = new Asignatura($args["id"],$args["idMalla"],$args["codigo"],$args["nombre"],$args["idPeriodoAcademico"],$args["horasPractica"],$args["horasDocente"],$args["horasAutonomas"],$args["idUnidadOrganizacion"],$args["idCampoFormacion"],$args["credito"]);
      $sql = "INSERT INTO Asignatura (idMalla,codigo,nombre,idPeriodoAcademico,horasPractica,horasDocente,horasAutonomas,idUnidadOrganizacion,idCampoFormacion,credito) VALUES (?,?,?,?,?,?,?,?,?,?);";
      $parametros = array($asignatura->idMalla,$asignatura->codigo,$asignatura->nombre,$asignatura->idPeriodoAcademico,$asignatura->horasPractica,$asignatura->horasDocente,$asignatura->horasAutonomas,$asignatura->idUnidadOrganizacion,$asignatura->idCampoFormacion,$asignatura->credito);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $asignatura = new Asignatura($args["id"],$args["idMalla"],$args["codigo"],$args["nombre"],$args["idPeriodoAcademico"],$args["horasPractica"],$args["horasDocente"],$args["horasAutonomas"],$args["idUnidadOrganizacion"],$args["idCampoFormacion"],$args["credito"]);
      $parametros = array($asignatura->idMalla,$asignatura->codigo,$asignatura->nombre,$asignatura->idPeriodoAcademico,$asignatura->horasPractica,$asignatura->horasDocente,$asignatura->horasAutonomas,$asignatura->idUnidadOrganizacion,$asignatura->idCampoFormacion,$asignatura->credito,$asignatura->id);
      $sql = "UPDATE Asignatura SET idMalla = ?,codigo = ?,nombre = ?,idPeriodoAcademico = ?,horasPractica = ?,horasDocente = ?,horasAutonomas = ?,idUnidadOrganizacion = ?,idCampoFormacion = ?,credito = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Asignatura WHERE id = ?;";
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
         $sql = "SELECT * FROM Asignatura;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Asignatura WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Asignatura LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Asignatura;";
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
            $sql = "SELECT * FROM Asignatura WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Asignatura WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Asignatura WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Asignatura WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}