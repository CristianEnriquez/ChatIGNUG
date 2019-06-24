<?php
class Documento
{
   public $id;
   public $documento;
   public $descripcion;

   function __construct($id,$documento,$descripcion){
      $this->id = $id;
      $this->documento = $documento;
      $this->descripcion = $descripcion;
   }
}
?>