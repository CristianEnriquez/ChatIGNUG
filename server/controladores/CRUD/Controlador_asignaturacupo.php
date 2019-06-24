<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/AsignaturaCupo.php');
include_once('../controladores/CRUD/Controlador_cupo.php');
class Controlador_asignaturacupo extends Controlador_Base
{
   function crear($args)
   {
      $asignaturacupo = new AsignaturaCupo($args["idCupo"],$args["idAsignatura"]);
      $sql = "INSERT INTO AsignaturaCupo (idCupo,idAsignatura) VALUES (?,?);";
      $parametros = array($asignaturacupo->idCupo,$asignaturacupo->idAsignatura);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $asignaturacupo = new AsignaturaCupo($args["id"],$args["idCupo"],$args["idAsignatura"]);
      $parametros = array($asignaturacupo->idCupo,$asignaturacupo->idAsignatura,$asignaturacupo->id);
      $sql = "UPDATE AsignaturaCupo SET idCupo = ?,idAsignatura = ? WHERE id = ?;";
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
      $sql = "DELETE FROM AsignaturaCupo WHERE id = ?;";
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
         $sql = "SELECT * FROM AsignaturaCupo;";
      }else{
      $parametros = array($id);
         $sql = "SELECT AsignaturaCupo.id, AsignaturaCupo.idCupo, AsignaturaCupo.idAsignatura, Malla.idCarrera as 'idCarrera',Persona.id as 'idPersona', Malla.id as 'idMalla' FROM AsignaturaCupo INNER JOIN Cupo ON AsignaturaCupo.idCupo = Cupo.id INNER JOIN Persona ON Cupo.idPersona = Persona.id INNER JOIN Asignatura ON AsignaturaCupo.idAsignatura = Asignatura.id INNER JOIN Malla ON Asignatura.idMalla = Malla.id WHERE AsignaturaCupo.id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM AsignaturaCupo LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM AsignaturaCupo;";
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
            $sql = "SELECT * FROM AsignaturaCupo WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM AsignaturaCupo WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM AsignaturaCupo WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM AsignaturaCupo WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}