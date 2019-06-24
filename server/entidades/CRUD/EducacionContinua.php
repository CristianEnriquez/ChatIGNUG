<?php
class EducacionContinua
{
   public $id;
   public $descripcion;
   public $horas;
   public $fechaInicio;
   public $fechaFin;
   public $idTipoEducacionContinua;
   public $lugar;

   function __construct($id,$descripcion,$horas,$fechaInicio,$fechaFin,$idTipoEducacionContinua,$lugar){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->horas = $horas;
      $this->fechaInicio = $fechaInicio;
      $this->fechaFin = $fechaFin;
      $this->idTipoEducacionContinua = $idTipoEducacionContinua;
      $this->lugar = $lugar;
   }
}
?>