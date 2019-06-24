<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_datos_estudiantes_matricula extends Controlador_Base
{
   function leer($args)
   { 
        $idPersona = $args["idPersona"];
        $idCarrera = $args["idCarrera"];
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT * FROM Matricula WHERE 1;";
        $parametros = array();
        if(!($idPersona == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idPersona = ?;";
            array_push($parametros, $idPersona);
        }
        if(!($idCarrera == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idCarrera = ?;";
            array_push($parametros, $idCarrera);
        }
        if(!($idPeriodoLectivo == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idPeriodoLectivo = ?;";
            array_push($parametros, $idPeriodoLectivo);
        }
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }

    function leer_paginado($args)
    {
        $pagina = $args["pagina"];
        $registrosPorPagina = $args["registros_por_pagina"];
        $desde = (($pagina-1)*$registrosPorPagina);
        $idPersona = $args["idPersona"];
        $idCarrera = $args["idCarrera"];
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT * FROM Matricula WHERE 1;";
        $parametros = array();
        if(!($idPersona == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idPersona = ?;";
            array_push($parametros, $idPersona);
        }
        if(!($idCarrera == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idCarrera = ?;";
            array_push($parametros, $idCarrera);
        }
        if(!($idPeriodoLectivo == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idPeriodoLectivo = ?;";
            array_push($parametros, $idPeriodoLectivo);
        }
        $sql = trim($sql, ';');
        $sql .= " LIMIT $desde,$registrosPorPagina;";
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
    }

    function numero_paginas($args)
    {
        $registrosPorPagina = $args["registros_por_pagina"];
        $idPersona = $args["idPersona"];
        $idCarrera = $args["idCarrera"];
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Matricula WHERE 1;";
        $parametros = array();
        if(!($idPersona == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idPersona = ?;";
            array_push($parametros, $idPersona);
        }
        if(!($idCarrera == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idCarrera = ?;";
            array_push($parametros, $idCarrera);
        }
        if(!($idPeriodoLectivo == 0)){
            $sql = trim($sql, ';');
            $sql .= " AND idPeriodoLectivo = ?;";
            array_push($parametros, $idPeriodoLectivo);
        }
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }
    }
}