<?php
class TutorCarrera
{
   public $id;
   public $idPersona;
   public $idCarrera;

   function __construct($id,$idPersona,$idCarrera){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->idCarrera = $idCarrera;
   }
}
?>