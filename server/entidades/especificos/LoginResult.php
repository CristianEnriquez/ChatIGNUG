<?php
include_once('../entidades/CRUD/Persona.php');

class LoginResult
{
   public $idRol;
   public $Persona;
   
   function __construct(int $idRol,Persona $Persona){
      $this->idRol = $idRol;
      $this->Persona = $Persona;
   }
}
?>