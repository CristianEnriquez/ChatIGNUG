<?php
class Aula
{
   public $id;
   public $capacidad;
   public $descripcion;
   public $idTipoAula;

   function __construct($id,$capacidad,$descripcion,$idTipoAula){
      $this->id = $id;
      $this->capacidad = $capacidad;
      $this->descripcion = $descripcion;
      $this->idTipoAula = $idTipoAula;
   }
}
?>