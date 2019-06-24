<?php
class PeriodoLectivo
{
   public $id;
   public $descripcion;
   public $fechaInicio;
   public $fechaFin;
   public $matriculable;
   public $codigo;
   public $ordinal;

   function __construct($id,$descripcion,$fechaInicio,$fechaFin,$matriculable,$codigo,$ordinal){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->fechaInicio = $fechaInicio;
      $this->fechaFin = $fechaFin;
      $this->matriculable = $matriculable;
      $this->codigo = $codigo;
      $this->ordinal = $ordinal;
   }
}
?>