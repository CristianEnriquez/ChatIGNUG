<?php
class PlanSemanaRecursoDidactico
{
   public $id;
   public $idSilaboRecursoDidactico;
   public $idPlanSemana;

   function __construct($id,$idSilaboRecursoDidactico,$idPlanSemana){
      $this->id = $id;
      $this->idSilaboRecursoDidactico = $idSilaboRecursoDidactico;
      $this->idPlanSemana = $idPlanSemana;
   }
}
?>