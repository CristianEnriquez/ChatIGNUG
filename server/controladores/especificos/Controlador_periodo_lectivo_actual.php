<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/especificos/PeriodoLectivoActual.php');

class Controlador_periodo_lectivo_actual extends Controlador_Base
{
   function consultar()
   { 
        $sql = "SELECT id, descripcion FROM PeriodoLectivo WHERE matriculable='1';";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}