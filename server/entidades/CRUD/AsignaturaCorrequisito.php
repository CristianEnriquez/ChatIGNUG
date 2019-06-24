<?php
class AsignaturaCorrequisito
{
   public $id;
   public $idAsignatura;
   public $idAsignaturaCorrequisito;

   function __construct($id,$idAsignatura,$idAsignaturaCorrequisito){
      $this->id = $id;
      $this->idAsignatura = $idAsignatura;
      $this->idAsignaturaCorrequisito = $idAsignaturaCorrequisito;
   }
}
?>