<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/AulasAsignaturas.php');
class Controlador_aulasasignaturas extends Controlador_Base
{
   function crear($args)
   {
      $aulasasignaturas = new AulasAsignaturas($args["id"],$args["idAula"],$args["idDocenteAsignatura"]);
      $sql = "INSERT INTO AulasAsignaturas (idAula,idDocenteAsignatura) VALUES (?,?);";
      $parametros = array($aulasasignaturas->idAula,$aulasasignaturas->idDocenteAsignatura);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $aulasasignaturas = new AulasAsignaturas($args["id"],$args["idAula"],$args["idDocenteAsignatura"]);
      $parametros = array($aulasasignaturas->idAula,$aulasasignaturas->idDocenteAsignatura,$aulasasignaturas->id);
      $sql = "UPDATE AulasAsignaturas SET idAula = ?,idDocenteAsignatura = ? WHERE id = ?;";
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
      $sql = "DELETE FROM AulasAsignaturas WHERE id = ?;";
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
         $sql = "SELECT * FROM AulasAsignaturas;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM AulasAsignaturas WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM AulasAsignaturas LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM AulasAsignaturas;";
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
            $sql = "SELECT * FROM AulasAsignaturas WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM AulasAsignaturas WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM AulasAsignaturas WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM AulasAsignaturas WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}