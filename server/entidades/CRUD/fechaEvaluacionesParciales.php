<?php
class fechaEvaluacionesParciales
{
   public $id;
   public $fechaParcial1;
   public $fechaEvaluacionParcial1;
   public $fechaEvaluacionParcial2;
   public $idMalla;
   public $idPeriodoLectivo;

   function __construct($id,$fechaParcial1,$fechaEvaluacionParcial1,$fechaEvaluacionParcial2,$idMalla,$idPeriodoLectivo){
      $this->id = $id;
      $this->fechaParcial1 = $fechaParcial1;
      $this->fechaEvaluacionParcial1 = $fechaEvaluacionParcial1;
      $this->fechaEvaluacionParcial2 = $fechaEvaluacionParcial2;
      $this->idMalla = $idMalla;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
   }
}
?>