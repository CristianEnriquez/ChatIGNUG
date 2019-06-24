<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SilaboElementos.php');
class Controlador_silaboelementos extends Controlador_Base
{
   function crear($args)
   {
      $silaboelementos = new SilaboElementos($args["id"],$args["idSilaboUnidades"],$args["IdVerboBloom"],$args["objeto"],$args["condicion"],$args["finalidad"],$args["codigo"]);
      $sql = "INSERT INTO SilaboElementos (idSilaboUnidades,IdVerboBloom,objeto,condicion,finalidad,codigo) VALUES (?,?,?,?,?,?);";
      $parametros = array($silaboelementos->idSilaboUnidades,$silaboelementos->IdVerboBloom,$silaboelementos->objeto,$silaboelementos->condicion,$silaboelementos->finalidad,$silaboelementos->codigo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silaboelementos = new SilaboElementos($args["id"],$args["idSilaboUnidades"],$args["IdVerboBloom"],$args["objeto"],$args["condicion"],$args["finalidad"],$args["codigo"]);
      $parametros = array($silaboelementos->idSilaboUnidades,$silaboelementos->IdVerboBloom,$silaboelementos->objeto,$silaboelementos->condicion,$silaboelementos->finalidad,$silaboelementos->codigo,$silaboelementos->id);
      $sql = "UPDATE SilaboElementos SET idSilaboUnidades = ?,IdVerboBloom = ?,objeto = ?,condicion = ?,finalidad = ?,codigo = ? WHERE id = ?;";
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
      $sql = "DELETE FROM SilaboElementos WHERE id = ?;";
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
         $sql = "SELECT * FROM SilaboElementos;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SilaboElementos WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SilaboElementos LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SilaboElementos;";
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
            $sql = "SELECT * FROM SilaboElementos WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SilaboElementos WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SilaboElementos WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SilaboElementos WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}