<?php
class Aportes
{
   public $id;
   public $nota;
   public $idDetalleAporte;
   public $idMatriculaAsignatura;

   function __construct($id,$nota,$idDetalleAporte,$idMatriculaAsignatura){
      $this->id = $id;
      $this->nota = $nota;
      $this->idDetalleAporte = $idDetalleAporte;
      $this->idMatriculaAsignatura = $idMatriculaAsignatura;
   }
}
?>