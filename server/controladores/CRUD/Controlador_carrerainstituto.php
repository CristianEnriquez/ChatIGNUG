<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/CarreraInstituto.php');
class Controlador_carrerainstituto extends Controlador_Base
{
   function crear($args)
   {
      $carrerainstituto = new CarreraInstituto($args["id"],$args["idCarrera"],$args["idInstituto"]);
      $sql = "INSERT INTO CarreraInstituto (idCarrera,idInstituto) VALUES (?,?);";
      $parametros = array($carrerainstituto->idCarrera,$carrerainstituto->idInstituto);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $carrerainstituto = new CarreraInstituto($args["id"],$args["idCarrera"],$args["idInstituto"]);
      $parametros = array($carrerainstituto->idCarrera,$carrerainstituto->idInstituto,$carrerainstituto->id);
      $sql = "UPDATE CarreraInstituto SET idCarrera = ?,idInstituto = ? WHERE id = ?;";
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
      $sql = "DELETE FROM CarreraInstituto WHERE id = ?;";
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
         $sql = "SELECT * FROM CarreraInstituto;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM CarreraInstituto WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM CarreraInstituto LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM CarreraInstituto;";
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
            $sql = "SELECT * FROM CarreraInstituto WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM CarreraInstituto WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM CarreraInstituto WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM CarreraInstituto WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}