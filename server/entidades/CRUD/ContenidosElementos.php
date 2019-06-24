<?php
class ContenidosElementos
{
   public $id;
   public $idSilaboUnidad;
   public $semana;
   public $contenido;
   public $horasDocencia;
   public $observaciones;

   function __construct($id,$idSilaboUnidad,$semana,$contenido,$horasDocencia,$observaciones){
      $this->id = $id;
      $this->idSilaboUnidad = $idSilaboUnidad;
      $this->semana = $semana;
      $this->contenido = $contenido;
      $this->horasDocencia = $horasDocencia;
      $this->observaciones = $observaciones;
   }
}
?>