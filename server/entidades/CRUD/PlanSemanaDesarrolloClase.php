<?php
class PlanSemanaDesarrolloClase
{
   public $id;
   public $descripcion;
   public $tiempo;
   public $idPlanSemana;

   function __construct($id,$descripcion,$tiempo,$idPlanSemana){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->tiempo = $tiempo;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>