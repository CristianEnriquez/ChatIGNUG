<?php
class PerfilEgreso
{
   public $id;
   public $idmalla;
   public $descripcion;

   function __construct($id,$idmalla,$descripcion){
      $this->id = $id;
      $this->idmalla = $idmalla;
      $this->descripcion = $descripcion;
   }
}
?>