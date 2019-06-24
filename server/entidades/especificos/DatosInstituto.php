<?php
class DatosInstituto
{
   public $nombre;
   public $rector;
   public $vicerector;
   public $colorCarpeta;
   
   function __construct($nombre, $rector, $vicerector, $colorCarpeta){
      $this->nombre = $nombre;
      $this->rector = $rector;
      $this->vicerector = $vicerector;
      $this->colorCarpeta = $colorCarpeta;
   }
}
?>