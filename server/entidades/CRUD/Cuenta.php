<?php
class Cuenta
{
   public $id;
   public $idRol;
   public $idPersona;

   function __construct($id,$idRol,$idPersona){
      $this->id = $id;
      $this->idRol = $idRol;
      $this->idPersona = $idPersona;
   }
}
?>