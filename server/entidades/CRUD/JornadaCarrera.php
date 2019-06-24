<?php
class JornadaCarrera
{
   public $id;
   public $idJornada;
   public $idCarrera;

   function __construct($id,$idJornada,$idCarrera){
      $this->id = $id;
      $this->idJornada = $idJornada;
      $this->idCarrera = $idCarrera;
   }
}
?>