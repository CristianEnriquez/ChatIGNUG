<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/SilaboRecursoDidactico.php');
class Controlador_silaborecursodidactico extends Controlador_Base
{
   function crear($args)
   {
      $silaborecursodidactico = new SilaboRecursoDidactico($args["id"],$args["idSilabo"],$args["idRecursoDidactico"]);
      $sql = "INSERT INTO SilaboRecursoDidactico (idSilabo,idRecursoDidactico) VALUES (?,?);";
      $parametros = array($silaborecursodidactico->idSilabo,$silaborecursodidactico->idRecursoDidactico);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silaborecursodidactico = new SilaboRecursoDidactico($args["id"],$args["idSilabo"],$args["idRecursoDidactico"]);
      $parametros = array($silaborecursodidactico->idSilabo,$silaborecursodidactico->idRecursoDidactico,$silaborecursodidactico->id);
      $sql = "UPDATE SilaboRecursoDidactico SET idSilabo = ?,idRecursoDidactico = ? WHERE id = ?;";
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
      $sql = "DELETE FROM SilaboRecursoDidactico WHERE id = ?;";
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
         $sql = "SELECT * FROM SilaboRecursoDidactico;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM SilaboRecursoDidactico WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM SilaboRecursoDidactico LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM SilaboRecursoDidactico;";
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
            $sql = "SELECT * FROM SilaboRecursoDidactico WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM SilaboRecursoDidactico WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM SilaboRecursoDidactico WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM SilaboRecursoDidactico WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}