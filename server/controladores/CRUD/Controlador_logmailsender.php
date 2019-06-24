<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/LogMailSender.php');
class Controlador_logmailsender extends Controlador_Base
{
   function crear($args)
   {
      $logmailsender = new LogMailSender($args["id"],$args["fecha"],$args["FromEmail"],$args["FromAlias"],$args["ReplyEmail"],$args["ReplyAlias"],$args["ToEmail"],$args["ToAlias"],$args["Asunto"],$args["Mensaje"],$args["EstadoEnvio"]);
      $sql = "INSERT INTO LogMailSender (fecha,FromEmail,FromAlias,ReplyEmail,ReplyAlias,ToEmail,ToAlias,Asunto,Mensaje,EstadoEnvio) VALUES (?,?,?,?,?,?,?,?,?,?);";
      $fechaNoSQLTime = strtotime($logmailsender->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $logmailsender->fecha = $fechaSQLTime;
      $parametros = array($logmailsender->fecha,$logmailsender->FromEmail,$logmailsender->FromAlias,$logmailsender->ReplyEmail,$logmailsender->ReplyAlias,$logmailsender->ToEmail,$logmailsender->ToAlias,$logmailsender->Asunto,$logmailsender->Mensaje,$logmailsender->EstadoEnvio);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $logmailsender = new LogMailSender($args["id"],$args["fecha"],$args["FromEmail"],$args["FromAlias"],$args["ReplyEmail"],$args["ReplyAlias"],$args["ToEmail"],$args["ToAlias"],$args["Asunto"],$args["Mensaje"],$args["EstadoEnvio"]);
      $parametros = array($logmailsender->fecha,$logmailsender->FromEmail,$logmailsender->FromAlias,$logmailsender->ReplyEmail,$logmailsender->ReplyAlias,$logmailsender->ToEmail,$logmailsender->ToAlias,$logmailsender->Asunto,$logmailsender->Mensaje,$logmailsender->EstadoEnvio,$logmailsender->id);
      $sql = "UPDATE LogMailSender SET fecha = ?,FromEmail = ?,FromAlias = ?,ReplyEmail = ?,ReplyAlias = ?,ToEmail = ?,ToAlias = ?,Asunto = ?,Mensaje = ?,EstadoEnvio = ? WHERE id = ?;";
      $fechaNoSQLTime = strtotime($logmailsender->fecha);
      $fechaSQLTime = date("Y-m-d H:i:s", $fechaNoSQLTime);
      $logmailsender->fecha = $fechaSQLTime;
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function borrar($args)
   {
      $id = $args["id"];
      $parametros = array($id);
      $sql = "DELETE FROM LogMailSender WHERE id = ?;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function leer($args)
   {
      $id = $args["id"];
      if ($id==""){
         $sql = "SELECT * FROM LogMailSender;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM LogMailSender WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM LogMailSender LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM LogMailSender;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta[0];
   }

   function leer_filtrado($args)
   {
      $nombreColumna = $args["columna"];
      $tipoFiltro = $args["tipo_filtro"];
      $filtro = $args["filtro"];
      switch ($tipoFiltro){
         case "coincide":
            $parametros = array($filtro);
            $sql = "SELECT * FROM LogMailSender WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM LogMailSender WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM LogMailSender WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM LogMailSender WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}