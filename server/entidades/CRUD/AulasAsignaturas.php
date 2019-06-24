<?php
class AulasAsignaturas
{
   public $id;
   public $idAula;
   public $idDocenteAsignatura;

   function __construct($id,$idAula,$idDocenteAsignatura){
      $this->id = $id;
      $this->idAula = $idAula;
      $this->idDocenteAsignatura = $idDocenteAsignatura;
   }
}
?>