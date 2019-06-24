<?php
class Matricula
{
   public $id;
   public $codigo;
   public $fecha;
   public $idPeriodoLectivo;
   public $idPersona;
   public $idCarrera;
   public $numeroMatricula;
   public $folio;
   public $idJornada;
   public $idTipoMatricula;
   public $paralelo;
   public $nivel;

   function __construct($id,$codigo,$fecha,$idPeriodoLectivo,$idPersona,$idCarrera,$numeroMatricula,$folio,$idJornada,$idTipoMatricula,$paralelo,$nivel){
      $this->id = $id;
      $this->codigo = $codigo;
      $this->fecha = $fecha;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
      $this->idPersona = $idPersona;
      $this->idCarrera = $idCarrera;
      $this->numeroMatricula = $numeroMatricula;
      $this->folio = $folio;
      $this->idJornada = $idJornada;
      $this->idTipoMatricula = $idTipoMatricula;
      $this->paralelo = $paralelo;
      $this->nivel = $nivel;
   }
}
?>