<?php
class UnidadOrganizacion
{
   public $id;
   public $nombre;

   function __construct($id,$nombre){
      $this->id = $id;
      $this->nombre = $nombre;
   }
}
?>