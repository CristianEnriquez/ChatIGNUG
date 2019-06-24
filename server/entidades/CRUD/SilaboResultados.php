<?php
class SilaboResultados
{
   public $id;
   public $idSilaboElementos;
   public $IdVerboBloom;
   public $objeto;
   public $condicion;
   public $finalidad;
   public $codigo;

   function __construct($id,$idSilaboElementos,$IdVerboBloom,$objeto,$condicion,$finalidad,$codigo){
      $this->id = $id;
      $this->idSilaboElementos = $idSilaboElementos;
      $this->IdVerboBloom = $IdVerboBloom;
      $this->objeto = $objeto;
      $this->condicion = $condicion;
      $this->finalidad = $finalidad;
      $this->codigo = $codigo;
   }
}
?>