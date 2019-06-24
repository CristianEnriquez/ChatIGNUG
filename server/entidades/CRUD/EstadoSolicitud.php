<?php
class EstadoSolicitud
{
   public $id;
   public $descripcion;

   function __construct($id,$descripcion){
      $this->id = $id;
      $this->descripcion = $descripcion;
   }
}
?>