<?php
class Instituto
{
   public $id;
   public $descripcion;
   public $color;

   function __construct($id,$descripcion,$color){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->color = $color;
   }
}
?>