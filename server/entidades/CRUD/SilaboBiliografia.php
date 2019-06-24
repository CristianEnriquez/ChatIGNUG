<?php
class SilaboBiliografia
{
   public $id;
   public $descripcion;
   public $tipo;

   function __construct($id,$descripcion,$tipo){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->tipo = $tipo;
   }
}
?>