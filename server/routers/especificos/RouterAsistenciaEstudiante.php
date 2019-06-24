<?php
include_once('../routers/RouterBase.php');
include_once('../controladores/especificos/ControladorAsistenciaEstudiante.php');
class RouterAsistenciaEstudiante extends RouterBase
{
   public $controlador;

   function __construct(){
      parent::__construct();
      $this->controlador = new ControladorAsistenciaEstudiante();
   }
   function route()
   {
      switch (strtolower($this->datosURI->accion)){
         case "leer_asignatura":
            return $this->controlador->leer_asignatura($this->datosURI->argumentos["idPersona"], $this->datosURI->argumentos["idPeriodoLectivo"]);
            break;
      }
   }
}