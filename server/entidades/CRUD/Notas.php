<?php
class Notas
{
   public $id;
   public $idParcial;
   public $idMatriculaAsignatura;

   function __construct($id,$idParcial,$idMatriculaAsignatura){
      $this->id = $id;
      $this->idParcial = $idParcial;
      $this->idMatriculaAsignatura = $idMatriculaAsignatura;
   }
}
?>