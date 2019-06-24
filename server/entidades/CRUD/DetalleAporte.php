<?php
class DetalleAporte
{
   public $id;
   public $descripcion;
   public $idCategoriaNota;
   public $idDocenteAsignatura;

   function __construct($id,$descripcion,$idCategoriaNota,$idDocenteAsignatura){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->idCategoriaNota = $idCategoriaNota;
      $this->idDocenteAsignatura = $idDocenteAsignatura;
   }
}
?>