<?php
class CarreraInstituto
{
   public $id;
   public $idCarrera;
   public $idInstituto;

   function __construct($id,$idCarrera,$idInstituto){
      $this->id = $id;
      $this->idCarrera = $idCarrera;
      $this->idInstituto = $idInstituto;
   }
}
?>