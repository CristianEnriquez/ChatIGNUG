<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Silabo.php');
class Controlador_silabo extends Controlador_Base
{
   function crear($args)
   {
      $silabo = new Silabo($args["id"],$args["idPeriodoLectivo"],$args["idAsignatura"],$args["descripcion"],$args["objetivoParte1"],$args["objetivoParte2"],$args["objetivoParte3"],$args["objetivoParte4"],$args["codigo"],$args["idEstadoComponentePortafolioDocente"]);
      $sql = "INSERT INTO Silabo (idPeriodoLectivo,idAsignatura,descripcion,objetivoParte1,objetivoParte2,objetivoParte3,objetivoParte4,codigo,idEstadoComponentePortafolioDocente) VALUES (?,?,?,?,?,?,?,?,?);";
      $parametros = array($silabo->idPeriodoLectivo,$silabo->idAsignatura,$silabo->descripcion,$silabo->objetivoParte1,$silabo->objetivoParte2,$silabo->objetivoParte3,$silabo->objetivoParte4,$silabo->codigo,$silabo->idEstadoComponentePortafolioDocente);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $silabo = new Silabo($args["id"],$args["idPeriodoLectivo"],$args["idAsignatura"],$args["descripcion"],$args["objetivoParte1"],$args["objetivoParte2"],$args["objetivoParte3"],$args["objetivoParte4"],$args["codigo"],$args["idEstadoComponentePortafolioDocente"]);
      $parametros = array($silabo->idPeriodoLectivo,$silabo->idAsignatura,$silabo->descripcion,$silabo->objetivoParte1,$silabo->objetivoParte2,$silabo->objetivoParte3,$silabo->objetivoParte4,$silabo->codigo,$silabo->idEstadoComponentePortafolioDocente,$silabo->id);
      $sql = "UPDATE Silabo SET idPeriodoLectivo = ?,idAsignatura = ?,descripcion = ?,objetivoParte1 = ?,objetivoParte2 = ?,objetivoParte3 = ?,objetivoParte4 = ?,codigo = ?,idEstadoComponentePortafolioDocente = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Silabo WHERE id = ?;";
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
         $sql = "SELECT * FROM Silabo;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Silabo WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Silabo LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Silabo;";
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
            $sql = "SELECT * FROM Silabo WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Silabo WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Silabo WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Silabo WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}