<?php
class CategoriaAporte
{
   public $id;
   public $descripcion;
   public $idPadre;

   function __construct($id,$descripcion,$idPadre){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->idPadre = $idPadre;
   }
}
?>