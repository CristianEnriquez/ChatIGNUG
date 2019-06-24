<?php
class CargoInstituto
{
   public $id;
   public $idInstituto;
   public $idPersona;
   public $idCargo;
   public $fechaInicio;
   public $fechaFin;

   function __construct($id,$idInstituto,$idPersona,$idCargo,$fechaInicio,$fechaFin){
      $this->id = $id;
      $this->idInstituto = $idInstituto;
      $this->idPersona = $idPersona;
      $this->idCargo = $idCargo;
      $this->fechaInicio = $fechaInicio;
      $this->fechaFin = $fechaFin;
   }
}
?>