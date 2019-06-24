<?php
class SilaboUnidades
{
   public $id;
   public $idSilabo;
   public $descripcion;
   public $codigo;

   function __construct($id,$idSilabo,$descripcion,$codigo){
      $this->id = $id;
      $this->idSilabo = $idSilabo;
      $this->descripcion = $descripcion;
      $this->codigo = $codigo;
   }
}
?>