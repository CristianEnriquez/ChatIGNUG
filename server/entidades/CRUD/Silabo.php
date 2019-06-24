<?php
class Silabo
{
   public $id;
   public $idPeriodoLectivo;
   public $idAsignatura;
   public $descripcion;
   public $objetivoParte1;
   public $objetivoParte2;
   public $objetivoParte3;
   public $objetivoParte4;
   public $codigo;
   public $idEstadoComponentePortafolioDocente;

   function __construct($id,$idPeriodoLectivo,$idAsignatura,$descripcion,$objetivoParte1,$objetivoParte2,$objetivoParte3,$objetivoParte4,$codigo,$idEstadoComponentePortafolioDocente){
      $this->id = $id;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
      $this->idAsignatura = $idAsignatura;
      $this->descripcion = $descripcion;
      $this->objetivoParte1 = $objetivoParte1;
      $this->objetivoParte2 = $objetivoParte2;
      $this->objetivoParte3 = $objetivoParte3;
      $this->objetivoParte4 = $objetivoParte4;
      $this->codigo = $codigo;
      $this->idEstadoComponentePortafolioDocente = $idEstadoComponentePortafolioDocente;
   }
}
?>