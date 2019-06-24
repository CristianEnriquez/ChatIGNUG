<?php
class PlanSemanaObjetivo
{
   public $id;
   public $objetivo1;
   public $objetivo2;
   public $objetivo3;
   public $objetivo4;
   public $idPlanSemana;

   function __construct($id,$objetivo1,$objetivo2,$objetivo3,$objetivo4,$idPlanSemana){
      $this->id = $id;
      $this->objetivo1 = $objetivo1;
      $this->objetivo2 = $objetivo2;
      $this->objetivo3 = $objetivo3;
      $this->objetivo4 = $objetivo4;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>