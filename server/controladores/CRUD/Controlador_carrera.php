<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Carrera.php');
class Controlador_carrera extends Controlador_Base
{
    function crear($args)
    {
       $carrera = new Carrera($args["id"],$args["resolucion"],$args["nombre"],$args["descripcion"],$args["idModalidad"],$args["idInstituto"],$args["siglas"],$args["idTipoCarrera"],$args["idModalidadCarrera"]);
       $sql = "INSERT INTO Carrera (resolucion,nombre,descripcion,idModalidad,idInstituto,siglas,idTipoCarrera,idModalidadCarrera) VALUES (?,?,?,?,?,?,?,?);";
       $parametros = array($carrera->resolucion,$carrera->nombre,$carrera->descripcion,$carrera->idModalidad,$carrera->idInstituto,$carrera->siglas,$carrera->idTipoCarrera,$carrera->idModalidadCarrera);
       $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
       if(is_null($respuesta[0])){
          return true;
       }else{
          return false;
       }
    }
 
    function actualizar($args)
    {
       $carrera = new Carrera($args["id"],$args["resolucion"],$args["nombre"],$args["descripcion"],$args["idModalidad"],$args["idInstituto"],$args["siglas"],$args["idTipoCarrera"],$args["idModalidadCarrera"]);
       $parametros = array($carrera->resolucion,$carrera->nombre,$carrera->descripcion,$carrera->idModalidad,$carrera->idInstituto,$carrera->siglas,$carrera->idTipoCarrera,$carrera->idModalidadCarrera,$carrera->id);
       $sql = "UPDATE Carrera SET resolucion = ?,nombre = ?,descripcion = ?,idModalidad = ?,idInstituto = ?,siglas = ?,idTipoCarrera = ?,idModalidadCarrera = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Carrera WHERE id = ?;";
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
         $sql = "SELECT * FROM Carrera;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Carrera WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

    function leer_vigentes($args)
    {
        $id = $args["id"];
        if ($id==""){
            $sql = "SELECT * FROM Carrera where id = 3 or id = 5 or id = 6 or id = 1 or id = 11;";
        }else{
            $parametros = array($id);
            $sql = "SELECT * FROM Carrera WHERE id = ?;";
        }
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        return $respuesta;
    }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Carrera LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Carrera;";
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
            $sql = "SELECT * FROM Carrera WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Carrera WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Carrera WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Carrera WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}