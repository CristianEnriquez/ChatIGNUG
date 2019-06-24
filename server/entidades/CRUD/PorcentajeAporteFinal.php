<?php
class PorcentajeAporteFinal
{
   public $id;
   public $idAporteFinal;
   public $idCategoriaAporte;
   public $porcentaje;

   function __construct($id,$idAporteFinal,$idCategoriaAporte,$porcentaje){
      $this->id = $id;
      $this->idAporteFinal = $idAporteFinal;
      $this->idCategoriaAporte = $idCategoriaAporte;
      $this->porcentaje = $porcentaje;
   }
}
?>