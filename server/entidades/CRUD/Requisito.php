<?php
class Requisito
{
   public $id;
   public $idAsignaturaDependiente;
   public $idAsignaturaIndependiente;
   public $idTipoRequisito;

   function __construct($id,$idAsignaturaDependiente,$idAsignaturaIndependiente,$idTipoRequisito){
      $this->id = $id;
      $this->idAsignaturaDependiente = $idAsignaturaDependiente;
      $this->idAsignaturaIndependiente = $idAsignaturaIndependiente;
      $this->idTipoRequisito = $idTipoRequisito;
   }
}
?>