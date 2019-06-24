<?php
class ContenidosActividades
{
   public $id;
   public $idContenidosElementos;
   public $contenido;
   public $idTipoContenidoActividad;
   public $orden;
   public $horasActividad;

   function __construct($id,$idContenidosElementos,$contenido,$idTipoContenidoActividad,$orden,$horasActividad){
      $this->id = $id;
      $this->idContenidosElementos = $idContenidosElementos;
      $this->contenido = $contenido;
      $this->idTipoContenidoActividad = $idTipoContenidoActividad;
      $this->orden = $orden;
      $this->horasActividad = $horasActividad;
   }
}
?>