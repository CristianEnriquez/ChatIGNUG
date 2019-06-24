<?php
class LogMailSender
{
   public $id;
   public $fecha;
   public $FromEmail;
   public $FromAlias;
   public $ReplyEmail;
   public $ReplyAlias;
   public $ToEmail;
   public $ToAlias;
   public $Asunto;
   public $Mensaje;
   public $EstadoEnvio;

   function __construct($id,$fecha,$FromEmail,$FromAlias,$ReplyEmail,$ReplyAlias,$ToEmail,$ToAlias,$Asunto,$Mensaje,$EstadoEnvio){
      $this->id = $id;
      $this->fecha = $fecha;
      $this->FromEmail = $FromEmail;
      $this->FromAlias = $FromAlias;
      $this->ReplyEmail = $ReplyEmail;
      $this->ReplyAlias = $ReplyAlias;
      $this->ToEmail = $ToEmail;
      $this->ToAlias = $ToAlias;
      $this->Asunto = $Asunto;
      $this->Mensaje = $Mensaje;
      $this->EstadoEnvio = $EstadoEnvio;
   }
}
?>