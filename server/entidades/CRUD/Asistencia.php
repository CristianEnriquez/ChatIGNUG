<?php
class Asistencia
{
   public $id;
   public $idMatriculaAsignatura;
   public $fecha;
   public $horas;

   function __construct($id,$idMatriculaAsignatura,$fecha,$horas){
      $this->id = $id;
      $this->idMatriculaAsignatura = $idMatriculaAsignatura;
      $this->fecha = $fecha;
      $this->horas = $horas;
   }
}
?>