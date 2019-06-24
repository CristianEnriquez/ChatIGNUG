<?php
class Cupo
{
   public $id;
   public $idJornadaCarrera;
   public $idPersona;
   public $idEstadoCupo;
   public $idPeriodoLectivo;
   public $fecha;
   public $idTipoMatricula;
   public $paralelo;
   public $nivel;

   function __construct($id,$idJornadaCarrera,$idPersona,$idEstadoCupo,$idPeriodoLectivo,$fecha,$idTipoMatricula,$paralelo,$nivel){
      $this->id = $id;
      $this->idJornadaCarrera = $idJornadaCarrera;
      $this->idPersona = $idPersona;
      $this->idEstadoCupo = $idEstadoCupo;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
      $this->fecha = $fecha;
      $this->idTipoMatricula = $idTipoMatricula;
      $this->paralelo = $paralelo;
      $this->nivel = $nivel;
   }
}
?>