<?php
class MatriculaAsignatura
{
   public $id;
   public $idMatricula;
   public $idAsignatura;
   public $idParalelo;

   function __construct($id,$idMatricula,$idAsignatura,$idParalelo){
      $this->id = $id;
      $this->idMatricula = $idMatricula;
      $this->idAsignatura = $idAsignatura;
      $this->idParalelo = $idParalelo;
   }
}
?>