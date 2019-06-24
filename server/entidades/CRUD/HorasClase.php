<?php
class HorasClase
{
   public $id;
   public $idAsignatura;
   public $idParalelo;
   public $fecha;
   public $horas;

   function __construct($id,$idAsignatura,$idParalelo,$fecha,$horas){
      $this->id = $id;
      $this->idAsignatura = $idAsignatura;
      $this->idParalelo = $idParalelo;
      $this->fecha = $fecha;
      $this->horas = $horas;
   }
}
?>