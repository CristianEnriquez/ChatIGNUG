<?php
class Ubicacion
{
   public $id;
   public $codigo;
   public $descripcion;
   public $codigoPadre;

   function __construct($id,$codigo,$descripcion,$codigoPadre){
      $this->id = $id;
      $this->codigo = $codigo;
      $this->descripcion = $descripcion;
      $this->codigoPadre = $codigoPadre;
   }
}
?>