<?php
class SolicitudMatricula
{
   public $id;
   public $codigo;
   public $fecha;
   public $idPeriodoLectivo;
   public $idEstadoSolicitud;
   public $idPersona;
   public $idCarrera;

   function __construct($id,$codigo,$fecha,$idPeriodoLectivo,$idEstadoSolicitud,$idPersona,$idCarrera){
      $this->id = $id;
      $this->codigo = $codigo;
      $this->fecha = $fecha;
      $this->idPeriodoLectivo = $idPeriodoLectivo;
      $this->idEstadoSolicitud = $idEstadoSolicitud;
      $this->idPersona = $idPersona;
      $this->idCarrera = $idCarrera;
   }
}
?>