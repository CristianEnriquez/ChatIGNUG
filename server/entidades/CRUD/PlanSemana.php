<?php
class PlanSemana
{
   public $id;
   public $semana;
   public $idPeriodoLectivo;
   public $idAsignatura;
   public $estado;
   public $codigo;
   public $objetivo;

   function __construct($id,$semana,$idPeriodoLectivo,$idAsignatura,$estado,$codigo,$objetivo){
      $this->id = $id;
      $this->semana = $semana;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
      $this->idAsignatura = $idAsignatura;
      $this->estado = $estado;
      $this->codigo = $codigo;
      $this->objetivo = $objetivo;
   }
}
?>