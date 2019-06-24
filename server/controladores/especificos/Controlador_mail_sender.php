<?php
include_once('../libs/PHPMailer/PHPMailer.php');
include_once('../libs/PHPMailer/POP3.php');
include_once('../libs/PHPMailer/SMTP.php');
include_once('../controladores/Controlador_Base.php');
use PHPMailer\PHPMailer\POP3;
use PHPMailer\PHPMailer\PHPMailer;
class Controlador_mail_sender extends Controlador_Base
{
   public function enviar($args)
   {
       $cuenta = $this->cuentaEnvios();
       if( $cuenta <= 499 ){
            $FromEmail = $args["FromEmail"];
            $FromAlias = $args["FromAlias"];
            $FromClave = $args["FromClave"];
            $ReplyEmail = $args["ReplyEmail"];
            $ReplyAlias = $args["ReplyAlias"];
            $ToEmail = $args["ToEmail"];
            $ToAlias = $args["ToAlias"];
            $Mensaje = $args["Mensaje"];
            $Asunto = $args["Asunto"];
            $EstadoEnvio = $this->enviarMail($FromEmail, $FromAlias, $FromClave, $ReplyEmail, $ReplyAlias, $ToEmail, $ToAlias, $Mensaje, $Asunto);
            $fecha = date("Y-m-d H:i:s");
            return $this->registrarLOG($fecha, $FromEmail, $FromAlias, $ReplyEmail, $ReplyAlias, $ToEmail, $ToAlias, $Asunto, $Mensaje, $EstadoEnvio);
       }
       else{
            return false;
       }
   }

   private function enviarMail($FromEmail, $FromAlias, $FromClave, $ReplyEmail, $ReplyAlias, $ToEmail, $ToAlias, $Mensaje, $Asunto) {
        $EstadoEnvio = false;
        try{
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->Port = 587;
            $mail->SMTPSecure = 'tls';
            $mail->SMTPAuth = true;
            $mail->Username = $FromEmail;
            $mail->Password = $FromClave;
            $mail->setFrom( $FromEmail, $FromAlias );
            $mail->addReplyTo( $ReplyEmail, $ReplyAlias );
            $mail->addAddress($ToEmail, $ToAlias);
            $mail->Subject = $Asunto;
            $mail->msgHTML($Mensaje);
            $EstadoEnvio = $mail->send();
        }catch (Exception $e) {
            $EstadoEnvio = "Error de envio";
        }
        return $EstadoEnvio;
   }

   private function registrarLOG($fecha, $FromEmail, $FromAlias, $ReplyEmail, $ReplyAlias, $ToEmail, $ToAlias, $Asunto, $Mensaje, $EstadoEnvio) {
        if($EstadoEnvio) {
            $EstadoEnvio = "Enviado";
        }
        $sql = "INSERT INTO LogMailSender (fecha,FromEmail,FromAlias,ReplyEmail,ReplyAlias,ToEmail,ToAlias,Asunto,Mensaje,EstadoEnvio) VALUES (?,?,?,?,?,?,?,?,?,?);";
        $parametros = array($fecha,$FromEmail,$FromAlias,$ReplyEmail,$ReplyAlias,$ToEmail,$ToAlias,$Asunto,$Mensaje,$EstadoEnvio);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])){
            return true;
        }else{
            return false;
        }
   }

   public function cuentaEnvios(){
        $fecha = date("Y-m-d");
        $sql = "SELECT Count(id) as 'cuenta' FROM LogMailSender WHERE fecha > ?;";
        $parametros = array($fecha);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])){
            return false;
        }else{
            $cuenta = $respuesta[0]['cuenta'];
            return $cuenta;
        }  
   }
}