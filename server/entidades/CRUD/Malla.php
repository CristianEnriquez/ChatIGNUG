<?php
class Malla
{
   public $id;
   public $fechaMallaInicio;
   public $fechaMallaFin;
   public $idCarrera;
   public $idDocResolucion;

   function __construct($id,$fechaMallaInicio,$fechaMallaFin,$idCarrera,$idDocResolucion){
      $this->id = $id;
      $this->fechaMallaInicio = $fechaMallaInicio;
      $this->fechaMallaFin = $fechaMallaFin;
      $this->idCarrera = $idCarrera;
      $this->idDocResolucion = $idDocResolucion;
   }
}
?>