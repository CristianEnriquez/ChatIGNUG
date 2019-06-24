<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/HorasClaseDia.php');
class Controlador_horasclasedia extends Controlador_Base
{
   function crear($args)
   {
      $horasclasedia = new HorasClaseDia($args["id"],$args["idDocenteAsignatura"],$args["idDiaSemana"],$args["idTipoAula"],$args["numeroHoras"]);
      $sql = "INSERT INTO HorasClaseDia (idDocenteAsignatura,idDiaSemana,idTipoAula,numeroHoras) VALUES (?,?,?,?);";
      $parametros = array($horasclasedia->idDocenteAsignatura,$horasclasedia->idDiaSemana,$horasclasedia->idTipoAula,$horasclasedia->numeroHoras);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $horasclasedia = new HorasClaseDia($args["id"],$args["idDocenteAsignatura"],$args["idDiaSemana"],$args["idTipoAula"],$args["numeroHoras"]);
      $parametros = array($horasclasedia->idDocenteAsignatura,$horasclasedia->idDiaSemana,$horasclasedia->idTipoAula,$horasclasedia->numeroHoras,$horasclasedia->id);
      $sql = "UPDATE HorasClaseDia SET idDocenteAsignatura = ?,idDiaSemana = ?,idTipoAula = ?,numeroHoras = ? WHERE id = ?;";
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
      $sql = "DELETE FROM HorasClaseDia WHERE id = ?;";
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
         $sql = "SELECT * FROM HorasClaseDia;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM HorasClaseDia WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM HorasClaseDia LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM HorasClaseDia;";
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
            $sql = "SELECT * FROM HorasClaseDia WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM HorasClaseDia WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM HorasClaseDia WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM HorasClaseDia WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}