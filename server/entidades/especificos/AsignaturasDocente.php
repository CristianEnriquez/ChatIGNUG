<?php
class AsignaturasDocente
{
   public $idDocenteAsignatura;
   public $idAsignatura;
   public $idParalelo;
   public $nombre;

   function __construct($idDocenteAsignatura, $idAsignatura, $idParalelo, $nombre){
      $this->idDocenteAsignatura = $idDocenteAsignatura;
      $this->idAsignatura = $idAsignatura;
      $this->idParalelo;
      $this->nombre = $nombre;
   }
}
?>