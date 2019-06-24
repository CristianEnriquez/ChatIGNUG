<?php
class Titulo
{
   public $id;
   public $idPersona;
   public $idInstitucion;
   public $codigoRegistro;
   public $idNivelTitulo;

   function __construct($id,$idPersona,$idInstitucion,$codigoRegistro,$idNivelTitulo){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->idInstitucion = $idInstitucion;
      $this->codigoRegistro = $codigoRegistro;
      $this->idNivelTitulo = $idNivelTitulo;
   }
}
?>