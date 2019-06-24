<?php
class Enfermedad
{
   public $id;
   public $descripcion;
   public $observaciones;
   public $tratamiento;

   function __construct($id,$descripcion,$observaciones,$tratamiento){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->observaciones = $observaciones;
      $this->tratamiento = $tratamiento;
   }
}
?>