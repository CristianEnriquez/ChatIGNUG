<?php
class AporteFinal
{
   public $id;
   public $idCategoriaAporte;
   public $idMatriculaAsignatura;
   public $nota;

   function __construct($id,$idCategoriaAporte,$idMatriculaAsignatura,$nota){
      $this->id = $id;
      $this->idCategoriaAporte = $idCategoriaAporte;
      $this->idMatriculaAsignatura = $idMatriculaAsignatura;
      $this->nota = $nota;
   }
}
?>