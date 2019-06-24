<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/ContenidosElementos.php');
class Controlador_contenidoselementos extends Controlador_Base
{
   function crear($args)
   {
      $contenidoselementos = new ContenidosElementos($args["id"],$args["idSilaboUnidad"],$args["semana"],$args["contenido"],$args["horasDocencia"],$args["observaciones"]);
      $sql = "INSERT INTO ContenidosElementos (idSilaboUnidad,semana,contenido,horasDocencia,observaciones) VALUES (?,?,?,?,?);";
      $parametros = array($contenidoselementos->idSilaboUnidad,$contenidoselementos->semana,$contenidoselementos->contenido,$contenidoselementos->horasDocencia,$contenidoselementos->observaciones);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $contenidoselementos = new ContenidosElementos($args["id"],$args["idSilaboUnidad"],$args["semana"],$args["contenido"],$args["horasDocencia"],$args["observaciones"]);
      $parametros = array($contenidoselementos->idSilaboUnidad,$contenidoselementos->semana,$contenidoselementos->contenido,$contenidoselementos->horasDocencia,$contenidoselementos->observaciones,$contenidoselementos->id);
      $sql = "UPDATE ContenidosElementos SET idSilaboUnidad = ?,semana = ?,contenido = ?,horasDocencia = ?,observaciones = ? WHERE id = ?;";
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
      $sql = "DELETE FROM ContenidosElementos WHERE id = ?;";
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
         $sql = "SELECT * FROM ContenidosElementos;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM ContenidosElementos WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM ContenidosElementos LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM ContenidosElementos;";
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
            $sql = "SELECT * FROM ContenidosElementos WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM ContenidosElementos WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM ContenidosElementos WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM ContenidosElementos WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}