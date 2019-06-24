<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/MatriculaAsignatura.php');
class Controlador_matriculaasignatura extends Controlador_Base
{
   function crear($args)
   {
      $matriculaasignatura = new MatriculaAsignatura($args["id"],$args["idMatricula"],$args["idAsignatura"]);
      $sql = "INSERT INTO MatriculaAsignatura (idMatricula,idAsignatura) VALUES (?,?);";
      $parametros = array($matriculaasignatura->idMatricula,$matriculaasignatura->idAsignatura);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $matriculaasignatura = new MatriculaAsignatura($args["id"],$args["idMatricula"],$args["idAsignatura"]);
      $parametros = array($matriculaasignatura->idMatricula,$matriculaasignatura->idAsignatura,$matriculaasignatura->id);
      $sql = "UPDATE MatriculaAsignatura SET idMatricula = ?,idAsignatura = ? WHERE id = ?;";
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
      $sql = "DELETE FROM MatriculaAsignatura WHERE id = ?;";
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
         $sql = "SELECT * FROM MatriculaAsignatura;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM MatriculaAsignatura WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM MatriculaAsignatura LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM MatriculaAsignatura;";
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
            $sql = "SELECT * FROM MatriculaAsignatura WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM MatriculaAsignatura WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM MatriculaAsignatura WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM MatriculaAsignatura WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}