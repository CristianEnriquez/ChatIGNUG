<?php
class DocenteAsignatura
{
   public $id;
   public $idDocente;
   public $idPeriodoLectivo;
   public $idAsignatura;
   public $idParalelo;

   function __construct($id,$idDocente,$idPeriodoLectivo,$idAsignatura,$idParalelo){
      $this->id = $id;
      $this->idDocente = $idDocente;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
      $this->idAsignatura = $idAsignatura;
      $this->idParalelo = $idParalelo;
   }
}
?>