<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/EducacionContinua.php');
class Controlador_educacioncontinua extends Controlador_Base
{
   function crear($args)
   {
      $educacioncontinua = new EducacionContinua($args["id"],$args["descripcion"],$args["horas"],$args["fechaInicio"],$args["fechaFin"],$args["idTipoEducacionContinua"],$args["lugar"]);
      $sql = "INSERT INTO EducacionContinua (descripcion,horas,fechaInicio,fechaFin,idTipoEducacionContinua,lugar) VALUES (?,?,?,?,?,?);";
      $fechaInicioNoSQLTime = strtotime($educacioncontinua->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
      $educacioncontinua->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($educacioncontinua->fechaFin);
      $fechaFinSQLTime = date("Y-m-d H:i:s", $fechaFinNoSQLTime);
      $educacioncontinua->fechaFin = $fechaFinSQLTime;
      $parametros = array($educacioncontinua->descripcion,$educacioncontinua->horas,$educacioncontinua->fechaInicio,$educacioncontinua->fechaFin,$educacioncontinua->idTipoEducacionContinua,$educacioncontinua->lugar);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $educacioncontinua = new EducacionContinua($args["id"],$args["descripcion"],$args["horas"],$args["fechaInicio"],$args["fechaFin"],$args["idTipoEducacionContinua"],$args["lugar"]);
      $parametros = array($educacioncontinua->descripcion,$educacioncontinua->horas,$educacioncontinua->fechaInicio,$educacioncontinua->fechaFin,$educacioncontinua->idTipoEducacionContinua,$educacioncontinua->lugar,$educacioncontinua->id);
      $sql = "UPDATE EducacionContinua SET descripcion = ?,horas = ?,fechaInicio = ?,fechaFin = ?,idTipoEducacionContinua = ?,lugar = ? WHERE id = ?;";
      $fechaInicioNoSQLTime = strtotime($educacioncontinua->fechaInicio);
      $fechaInicioSQLTime = date("Y-m-d H:i:s", $fechaInicioNoSQLTime);
      $educacioncontinua->fechaInicio = $fechaInicioSQLTime;
      $fechaFinNoSQLTime = strtotime($educacioncontinua->fechaFin);
      $fechaFinSQLTime = date("Y-m-d H:i:s", $fechaFinNoSQLTime);
      $educacioncontinua->fechaFin = $fechaFinSQLTime;
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
      $sql = "DELETE FROM EducacionContinua WHERE id = ?;";
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
         $sql = "SELECT * FROM EducacionContinua;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM EducacionContinua WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM EducacionContinua LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM EducacionContinua;";
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
            $sql = "SELECT * FROM EducacionContinua WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM EducacionContinua WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM EducacionContinua WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM EducacionContinua WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}