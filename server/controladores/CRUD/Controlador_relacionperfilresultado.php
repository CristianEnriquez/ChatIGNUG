<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/RelacionPerfilResultado.php');
class Controlador_relacionperfilresultado extends Controlador_Base
{
   function crear($args)
   {
      $relacionperfilresultado = new RelacionPerfilResultado($args["id"],$args["idSilaboResultados"],$args["idPerfilEgreso"],$args["contribucion"]);
      $sql = "INSERT INTO RelacionPerfilResultado (idSilaboResultados,idPerfilEgreso,contribucion) VALUES (?,?,?);";
      $parametros = array($relacionperfilresultado->idSilaboResultados,$relacionperfilresultado->idPerfilEgreso,$relacionperfilresultado->contribucion);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $relacionperfilresultado = new RelacionPerfilResultado($args["id"],$args["idSilaboResultados"],$args["idPerfilEgreso"],$args["contribucion"]);
      $parametros = array($relacionperfilresultado->idSilaboResultados,$relacionperfilresultado->idPerfilEgreso,$relacionperfilresultado->contribucion,$relacionperfilresultado->id);
      $sql = "UPDATE RelacionPerfilResultado SET idSilaboResultados = ?,idPerfilEgreso = ?,contribucion = ? WHERE id = ?;";
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
      $sql = "DELETE FROM RelacionPerfilResultado WHERE id = ?;";
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
         $sql = "SELECT * FROM RelacionPerfilResultado;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM RelacionPerfilResultado WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM RelacionPerfilResultado LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM RelacionPerfilResultado;";
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
            $sql = "SELECT * FROM RelacionPerfilResultado WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM RelacionPerfilResultado WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM RelacionPerfilResultado WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM RelacionPerfilResultado WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}