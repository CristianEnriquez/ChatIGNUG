<?php
class RelacionPerfilResultado
{
   public $id;
   public $idSilaboResultados;
   public $idPerfilEgreso;
   public $contribucion;

   function __construct($id,$idSilaboResultados,$idPerfilEgreso,$contribucion){
      $this->id = $id;
      $this->idSilaboResultados = $idSilaboResultados;
      $this->idPerfilEgreso = $idPerfilEgreso;
      $this->contribucion = $contribucion;
   }
}
?>