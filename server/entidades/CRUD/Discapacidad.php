<?php
class Discapacidad
{
   public $id;
   public $idPersona;
   public $idTipoDiscapacidad;
   public $porcentaje;

   function __construct($id,$idPersona,$idTipoDiscapacidad,$porcentaje){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->idTipoDiscapacidad = $idTipoDiscapacidad;
      $this->porcentaje = $porcentaje;
   }
}
?>