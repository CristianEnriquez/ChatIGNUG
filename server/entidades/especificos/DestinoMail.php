<?php
class DestinoMail
{
   public $identificacion;
   public $nombre1;
   public $nombre2;
   public $apellido1;
   public $apellido2;
   public $telefonoCelular;
   public $telefonoDomicilio;
   public $correoElectronico;
   public $idGenero;
   public $genero;
   public $idCarrera;
   public $carrera;
   public $coordinadorCarrera;
   public $idInstituto;
   public $instituto;
   public $nivel;
   
   function __construct($identificacion, $nombre1, $nombre2, $apellido1, $apellido2, $telefonoCelular, $telefonoDomicilio, $correoElectronico, $idGenero, $genero, $idCarrera, $carrera, $coordinadorCarrera, $idInstituto, $instituto, $nivel){
      $this->identificacion = $identificacion;
      $this->nombre1 = $nombre1;
      $this->nombre2 = $nombre2;
      $this->apellido1 = $apellido1;
      $this->apellido2 = $apellido2;
      $this->telefonoCelular = $telefonoCelular;
      $this->telefonoDomicilio = $telefonoDomicilio;
      $this->correoElectronico = $correoElectronico;
      $this->idGenero = $idGenero;
      $this->genero = $genero;
      $this->idCarrera = $idCarrera;
      $this->carrera = $carrera;
      $this->coordinadorCarrera = $coordinadorCarrera;
      $this->idInstituto = $idInstituto;
      $this->instituto = $instituto;
      $this->nivel = $nivel;
   }
}
?>
