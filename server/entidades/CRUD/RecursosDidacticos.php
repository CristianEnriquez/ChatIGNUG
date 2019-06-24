<?php
class RecursosDidacticos
{
   public $id;
   public $tipoMaterial;
   public $material;

   function __construct($id,$tipoMaterial,$material){
      $this->id = $id;
      $this->tipoMaterial = $tipoMaterial;
      $this->material = $material;
   }
}
?>