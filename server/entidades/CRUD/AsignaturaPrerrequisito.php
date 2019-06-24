<?php
class AsignaturaPrerrequisito
{
   public $id;
   public $idAsignatura;
   public $idAsignaturaPrerequisito;

   function __construct($id,$idAsignatura,$idAsignaturaPrerequisito){
      $this->id = $id;
      $this->idAsignatura = $idAsignatura;
      $this->idAsignaturaPrerequisito = $idAsignaturaPrerequisito;
   }
}
?>