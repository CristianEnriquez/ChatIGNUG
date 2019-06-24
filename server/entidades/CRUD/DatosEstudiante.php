<?php
class DatosEstudiante
{
   public $id;
   public $idEstudiante;
   public $descripcion;
   public $dato;

   function __construct($id,$idEstudiante,$descripcion,$dato){
      $this->id = $id;
      $this->idEstudiante = $idEstudiante;
      $this->descripcion = $descripcion;
      $this->dato = $dato;
   }
}
?>