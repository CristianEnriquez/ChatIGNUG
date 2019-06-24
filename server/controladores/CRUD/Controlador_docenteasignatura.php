<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/DocenteAsignatura.php');
class Controlador_docenteasignatura extends Controlador_Base
{
   function crear($args)
   {
      $docenteasignatura = new DocenteAsignatura($args["id"],$args["idDocente"],$args["idPeriodoLectivo"],$args["idAsignatura"],$args["idParalelo"]);
      $sql = "INSERT INTO DocenteAsignatura (idDocente,idPeriodoLectivo,idAsignatura,idParalelo) VALUES (?,?,?,?);";
      $parametros = array($docenteasignatura->idDocente,$docenteasignatura->idPeriodoLectivo,$docenteasignatura->idAsignatura,$docenteasignatura->idParalelo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $docenteasignatura = new DocenteAsignatura($args["id"],$args["idDocente"],$args["idPeriodoLectivo"],$args["idAsignatura"],$args["idParalelo"]);
      $parametros = array($docenteasignatura->idDocente,$docenteasignatura->idPeriodoLectivo,$docenteasignatura->idAsignatura,$docenteasignatura->idParalelo,$docenteasignatura->id);
      $sql = "UPDATE DocenteAsignatura SET idDocente = ?,idPeriodoLectivo = ?,idAsignatura = ?,idParalelo = ? WHERE id = ?;";
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
      $sql = "DELETE FROM DocenteAsignatura WHERE id = ?;";
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
         $sql = "SELECT * FROM DocenteAsignatura;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM DocenteAsignatura WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM DocenteAsignatura LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM DocenteAsignatura;";
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
            $sql = "SELECT * FROM DocenteAsignatura WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM DocenteAsignatura WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM DocenteAsignatura WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM DocenteAsignatura WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}