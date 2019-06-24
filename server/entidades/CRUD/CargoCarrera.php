<?php
class CargoCarrera
{
   public $id;
   public $idCarrera;
   public $idPersona;
   public $idCargo;
   public $fechaInicio;
   public $fechaFin;

   function __construct($id,$idCarrera,$idPersona,$idCargo,$fechaInicio,$fechaFin){
      $this->id = $id;
      $this->idCarrera = $idCarrera;
      $this->idPersona = $idPersona;
      $this->idCargo = $idCargo;
      $this->fechaInicio = $fechaInicio;
      $this->fechaFin = $fechaFin;
   }
}
?>