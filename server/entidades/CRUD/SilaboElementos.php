<?php
class SilaboElementos
{
   public $id;
   public $idSilaboUnidades;
   public $IdVerboBloom;
   public $objeto;
   public $condicion;
   public $finalidad;
   public $codigo;

   function __construct($id,$idSilaboUnidades,$IdVerboBloom,$objeto,$condicion,$finalidad,$codigo){
      $this->id = $id;
      $this->idSilaboUnidades = $idSilaboUnidades;
      $this->IdVerboBloom = $IdVerboBloom;
      $this->objeto = $objeto;
      $this->condicion = $condicion;
      $this->finalidad = $finalidad;
      $this->codigo = $codigo;
   }
}
?>