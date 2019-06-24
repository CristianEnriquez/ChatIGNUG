<?php
class Hobbies
{
   public $id;
   public $idPersona;
   public $descripcion;

   function __construct($id,$idPersona,$descripcion){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->descripcion = $descripcion;
   }
}
?>