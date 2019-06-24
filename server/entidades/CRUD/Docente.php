<?php
class Docente
{
   public $id;
   public $idPersona;
   public $fechaInicio;
   public $idEstado;

   function __construct($id,$idPersona,$fechaInicio,$idEstado){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->fechaInicio = $fechaInicio;
      $this->idEstado = $idEstado;
   }
}
?>