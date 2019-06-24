<?php
class ExperienciaLaboral
{
   public $id;
   public $idPersona;
   public $fechaInicio;
   public $fechaFin;
   public $descripcionCargo;
   public $descripcionFunciones;
   public $nombreEmpresa;
   public $idMotivoSalida;

   function __construct($id,$idPersona,$fechaInicio,$fechaFin,$descripcionCargo,$descripcionFunciones,$nombreEmpresa,$idMotivoSalida){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->fechaInicio = $fechaInicio;
      $this->fechaFin = $fechaFin;
      $this->descripcionCargo = $descripcionCargo;
      $this->descripcionFunciones = $descripcionFunciones;
      $this->nombreEmpresa = $nombreEmpresa;
      $this->idMotivoSalida = $idMotivoSalida;
   }
}
?>