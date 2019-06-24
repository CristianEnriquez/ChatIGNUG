<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SilaboResultados.php');
class Controlador_silaboresultados extends Controlador_Base
{
   function crear($args)
   {
      $silaboresultados = new SilaboResultados($args["id"],$args["idSilaboElementos"],$args["IdVerboBloom"],$args["objeto"],$args["condicion"],$args["finalidad"],$args["codigo"]);
      $sql = "INSERT INTO SilaboResultados (idSilaboElementos,IdVerboBloom,objeto,condicion,finalidad,codigo) VALUES (?,?,?,?,?,?);";
      $parametros = array($silaboresultados->idSilaboElementos,$silaboresultados->IdVerboBloom,$silaboresultados->objeto,$silaboresultados->condicion,$silaboresultados->finalidad,$silaboresultados->codigo);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silaboresultados = new SilaboResultados($args["id"],$args["idSilaboElementos"],$args["IdVerboBloom"],$args["objeto"],$args["condicion"],$args["finalidad"],$args["codigo"]);
      $parametros = array($silaboresultados->idSilaboElementos,$silaboresultados->IdVerboBloom,$silaboresultados->objeto,$silaboresultados->condicion,$silaboresultados->finalidad,$silaboresultados->codigo,$silaboresultados->id);
      $sql = "UPDATE SilaboResultados SET idSilaboElementos = ?,IdVerboBloom = ?,objeto = ?,condicion = ?,finalidad = ?,codigo = ? WHERE id = ?;";
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
      $sql = "DELETE FROM SilaboResultados WHERE id = ?;";
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
         $sql = "SELECT * FROM SilaboResultados;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SilaboResultados WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SilaboResultados LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SilaboResultados;";
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
            $sql = "SELECT * FROM SilaboResultados WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SilaboResultados WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SilaboResultados WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SilaboResultados WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}