<?php
class DatosCupo
{
   public $nombreCompleto;
   public $identificacion;
   public $carrera;
   public $idCarrera;
   public $siglasCarrera;
   public $idJornada;
   public $jornada;
   
   function __construct($nombreCompleto, $identificacion, $carrera, $idCarrera, $siglasCarrera, $idJornada, $jornada){
      $this->nombreCompleto = $nombreCompleto;
      $this->identificacion = $identificacion;
      $this->carrera = $carrera;
      $this->idCarrera = $idCarrera;
      $this->siglasCarrera = $siglasCarrera;
      $this->idJornada = $idJornada;
      $this->jornada = $jornada;
   }
}
?>