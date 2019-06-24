<?php
class Institucion
{
   public $id;
   public $nombre;
   public $idUbicacion;
   public $tipo;

   function __construct($id,$nombre,$idUbicacion,$tipo){
      $this->id = $id;
      $this->nombre = $nombre;
      $this->idUbicacion = $idUbicacion;
      $this->tipo = $tipo;
   }
}
?>