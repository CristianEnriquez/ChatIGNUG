<?php
class HorasClaseDia
{
   public $id;
   public $idDocenteAsignatura;
   public $idDiaSemana;
   public $idTipoAula;
   public $numeroHoras;

   function __construct($id,$idDocenteAsignatura,$idDiaSemana,$idTipoAula,$numeroHoras){
      $this->id = $id;
      $this->idDocenteAsignatura = $idDocenteAsignatura;
      $this->idDiaSemana = $idDiaSemana;
      $this->idTipoAula = $idTipoAula;
      $this->numeroHoras = $numeroHoras;
   }
}
?>