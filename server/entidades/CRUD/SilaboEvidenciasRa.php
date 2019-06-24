<?php
class SilaboEvidenciasRa
{
   public $id;
   public $idSilaboResultados;
   public $descripcion;
   public $codigo;

   function __construct($id,$idSilaboResultados,$descripcion,$codigo){
      $this->id = $id;
      $this->idSilaboResultados = $idSilaboResultados;
      $this->descripcion = $descripcion;
      $this->codigo = $codigo;
   }
}
?>