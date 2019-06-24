<?php
class RolSecundario
{
   public $id;
   public $idPersona;
   public $idRol;

   function __construct($id,$idPersona,$idRol){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->idRol = $idRol;
   }
}
?>