<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/ContenidosActividades.php');
class Controlador_contenidosactividades extends Controlador_Base
{
   function crear($args)
   {
      $contenidosactividades = new ContenidosActividades($args["id"],$args["idContenidosElementos"],$args["contenido"],$args["idTipoContenidoActividad"],$args["orden"],$args["horasActividad"]);
      $sql = "INSERT INTO ContenidosActividades (idContenidosElementos,contenido,idTipoContenidoActividad,orden,horasActividad) VALUES (?,?,?,?,?);";
      $parametros = array($contenidosactividades->idContenidosElementos,$contenidosactividades->contenido,$contenidosactividades->idTipoContenidoActividad,$contenidosactividades->orden,$contenidosactividades->horasActividad);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $contenidosactividades = new ContenidosActividades($args["id"],$args["idContenidosElementos"],$args["contenido"],$args["idTipoContenidoActividad"],$args["orden"],$args["horasActividad"]);
      $parametros = array($contenidosactividades->idContenidosElementos,$contenidosactividades->contenido,$contenidosactividades->idTipoContenidoActividad,$contenidosactividades->orden,$contenidosactividades->horasActividad,$contenidosactividades->id);
      $sql = "UPDATE ContenidosActividades SET idContenidosElementos = ?,contenido = ?,idTipoContenidoActividad = ?,orden = ?,horasActividad = ? WHERE id = ?;";
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
      $sql = "DELETE FROM ContenidosActividades WHERE id = ?;";
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
         $sql = "SELECT * FROM ContenidosActividades;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM ContenidosActividades WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM ContenidosActividades LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM ContenidosActividades;";
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
            $sql = "SELECT * FROM ContenidosActividades WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM ContenidosActividades WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM ContenidosActividades WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM ContenidosActividades WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}