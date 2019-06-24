<?php
class PlanSemanaTema
{
   public $id;
   public $descripcion;
   public $idPlanSemana;

   function __construct($id,$descripcion,$idPlanSemana){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>