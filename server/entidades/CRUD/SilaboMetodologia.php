<?php
class SilaboMetodologia
{
   public $id;
   public $idSilabo;
   public $idMetodologia;

   function __construct($id,$idSilabo,$idMetodologia){
      $this->id = $id;
      $this->idSilabo = $idSilabo;
      $this->idMetodologia = $idMetodologia;
   }
}
?>