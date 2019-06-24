<?php
class AsignaturaSolicitudMatricula
{
   public $id;
   public $idSolicitudMatricula;
   public $idAsignatura;

   function __construct($id,$idSolicitudMatricula,$idAsignatura){
      $this->id = $id;
      $this->idSolicitudMatricula = $idSolicitudMatricula;
      $this->idAsignatura = $idAsignatura;
   }
}
?>