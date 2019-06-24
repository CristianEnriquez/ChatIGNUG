<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/especificos/LoginResult.php');
include_once('../entidades/CRUD/Persona.php');
class Controlador_login extends Controlador_Base
{
   function cuenta($args)
   { 
       $email = $args["email"];
       $clave = $args["clave"];
       // CIFRAR LA CLAVE
       $sql = "SELECT Persona.id as 'idPersona', Cuenta.idRol as 'idRol' FROM Persona INNER JOIN Cuenta ON Cuenta.idPersona = Persona.id WHERE Persona.correoElectronicoInstitucional = ?;";
       $parametros = array($email);
       $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
       if(is_null($respuesta[0])||$respuesta[0]==0){
          return new LoginResult(0,new Persona);
       }else{
           $in=imap_open("{pop.gmail.com:995/pop3/ssl}",$email, $clave);
           if($in==false){
               return new LoginResult(0,new Persona);
           }
           imap_close($in);
           $sqlPersona = "SELECT * FROM Persona WHERE Persona.id = ?;";
           $parametrosPersona = array($respuesta[0]["idPersona"]);
           $persona = $this->conexion->ejecutarConsulta($sqlPersona,$parametrosPersona);
           $PersonaLogged = new Persona($persona[0]["id"],$persona[0]["identificacion"],$persona[0]["nombre1"],$persona[0]["nombre2"],$persona[0]["apellido1"],$persona[0]["apellido2"],$persona[0]["fechaNacimiento"],$persona[0]["telefonoCelular"],$persona[0]["telefonoDomicilio"],$persona[0]["correoElectronicoInstitucional"],$persona[0]["correoElectronicoPersonal"],$persona[0]["idGenero"],$persona[0]["idUbicacionDomicilioPais"],$persona[0]["idUbicacionDomicilioProvincia"],$persona[0]["idUbicacionDomicilioCanton"],$persona[0]["idUbicacionDomicilioParroquia"],$persona[0]["direccionDomicilio"],$persona[0]["idEstadoCivil"],$persona[0]["idUbicacionNacimientoPais"],$persona[0]["idUbicacionNacimientoProvincia"],$persona[0]["idUbicacionNacimientoCanton"],$persona[0]["idUbicacionNacimientoParroquia"],$persona[0]["idIngresos"],$persona[0]["idEtnia"],$persona[0]["idTipoSangre"],$persona[0]["numeroHijos"],$persona[0]["idOcupacion"],$persona[0]["carnetConadis"],$persona[0]["idTipoDiscapacidad"],$persona[0]["porcentajeDiscapacidad"],$persona[0]["nombrePadre"],$persona[0]["paisOrigenPadre"],$persona[0]["idNivelEstudioPadre"],$persona[0]["nombreMadre"],$persona[0]["paisOrigenMadre"],$persona[0]["idNivelEstudioMadre"]);
           $loginResult = new LoginResult((int)$respuesta[0]["idRol"],$PersonaLogged);
           return $loginResult;
       }
   }
}