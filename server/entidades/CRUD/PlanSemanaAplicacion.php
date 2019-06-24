<?php
class PlanSemanaAplicacion
{
   public $id;
   public $idSilaboResultados;
   public $idPlanSemana;

   function __construct($id,$idSilaboResultados,$idPlanSemana){
      $this->id = $id;
      $this->idSilaboResultados = $idSilaboResultados;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>