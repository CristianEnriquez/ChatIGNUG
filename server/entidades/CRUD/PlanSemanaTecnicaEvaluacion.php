<?php
class PlanSemanaTecnicaEvaluacion
{
   public $id;
   public $idTecnicasEvaluacion;
   public $idPlanSemana;

   function __construct($id,$idTecnicasEvaluacion,$idPlanSemana){
      $this->id = $id;
      $this->idTecnicasEvaluacion = $idTecnicasEvaluacion;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>