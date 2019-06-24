<?php
class Carrera
{
   public $id;
   public $resolucion;
   public $nombre;
   public $descripcion;
   public $idModalidad;
   public $idInstituto;
   public $siglas;
   public $idTipoCarrera;
   public $idModalidadCarrera;

   function __construct($id,$resolucion,$nombre,$descripcion,$idModalidad,$idInstituto,$siglas,$idTipoCarrera,$idModalidadCarrera){
      $this->id = $id;
      $this->resolucion = $resolucion;
      $this->nombre = $nombre;
      $this->descripcion = $descripcion;
      $this->idModalidad = $idModalidad;
      $this->idInstituto = $idInstituto;
      $this->siglas = $siglas;
      $this->idTipoCarrera = $idTipoCarrera;
      $this->idModalidadCarrera = $idModalidadCarrera;
   }
}
?>