<?php
class SilaboRecursoDidactico
{
   public $id;
   public $idSilabo;
   public $idRecursoDidactico;

   function __construct($id,$idSilabo,$idRecursoDidactico){
      $this->id = $id;
      $this->idSilabo = $idSilabo;
      $this->idRecursoDidactico = $idRecursoDidactico;
   }
}
?>