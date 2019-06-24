<?php
class Roles
{
   public $id;
   public $descripcion;
   public $acceso;

   function __construct($id,$descripcion,$acceso){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->acceso = $acceso;
   }
}
?>