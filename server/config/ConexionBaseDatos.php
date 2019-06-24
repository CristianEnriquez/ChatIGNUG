<?php
include_once("../persistencia/DatosConexion.php");
class ConexionBaseDatos {
    private static $array = array();
    public static function DatosConexiones(){
        $array = array();
        $array[] = new DatosConexion("local","localhost","pablorob_ignug","pablorob_itsy","AtLsV971*");
        return $array;
    }
}