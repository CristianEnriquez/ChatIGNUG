<?php
class AsignaturaCupo
{
   public $id;
   public $idCupo;
   public $idAsignatura;

   function __construct($id,$idCupo,$idAsignatura){
      $this->id = $id;
      $this->idCupo = $idCupo;
      $this->idAsignatura = $idAsignatura;
   }
}
?>