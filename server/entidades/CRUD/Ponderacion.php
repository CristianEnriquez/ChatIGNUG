<?php
class Ponderacion
{
   public $id;
   public $idCategoria;
   public $idParcial;
   public $porcentaje;

   function __construct($id,$idCategoria,$idParcial,$porcentaje){
      $this->id = $id;
      $this->idCategoria = $idCategoria;
      $this->idParcial = $idParcial;
      $this->porcentaje = $porcentaje;
   }
}
?>