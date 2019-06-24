<?php
class PlanSemanaMetodologia
{
   public $id;
   public $idSilaboMetodologia;
   public $idPlanSemana;

   function __construct($id,$idSilaboMetodologia,$idPlanSemana){
      $this->id = $id;
      $this->idSilaboMetodologia = $idSilaboMetodologia;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>