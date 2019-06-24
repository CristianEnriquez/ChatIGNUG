<?php
class Metodologia
{
   public $id;
   public $estrategia;
   public $finalidad;

   function __construct($id,$estrategia,$finalidad){
      $this->id = $id;
      $this->estrategia = $estrategia;
      $this->finalidad = $finalidad;
   }
}
?>