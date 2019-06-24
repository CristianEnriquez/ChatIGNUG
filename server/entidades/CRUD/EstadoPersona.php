<?php
class EstadoPersona
{
   public $id;
   public $idPersona;
   public $datosCompletos;
   public $edicionDeDatos;
   public $encuestaFactoresAsociados;

   function __construct($id,$idPersona,$datosCompletos,$edicionDeDatos,$encuestaFactoresAsociados){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->datosCompletos = $datosCompletos;
      $this->edicionDeDatos = $edicionDeDatos;
      $this->encuestaFactoresAsociados = $encuestaFactoresAsociados;
   }
}
?>