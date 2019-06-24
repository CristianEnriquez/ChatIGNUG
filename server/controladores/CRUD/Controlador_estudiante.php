<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Estudiante.php');
class Controlador_estudiante extends Controlador_Base
{
   function crear($args)
   {
      $estudiante = new Estudiante($args["id"],$args["idPersona"],$args["notaPostulacion"],$args["tituloBachiller"],$args["idTipoInstitucionProcedencia"],$args["idTipoBachillerato"],$args["poseeTituloEducacionSuperior"],$args["anoGraduacion"],$args["fechaInicioCarrrera"],$args["realizadoPracticasPreprofesionales"],$args["horasPracticasPreprofesionales"],$args["idTipoInstitucionPracticasPreprofesionales"],$args["idSectorEconomicoPracticasPreprofesionales"],$args["participadoProyectoVinculacion"],$args["idAlcanceProyectoVinculacion"],$args["nombreEmpresaTrabaja"],$args["idAreaEmpresaTrabaja"],$args["tituloEducacionSuperior"],$args["repetidoMateria"],$args["perdidoGratuidad"],$args["idOcupacionEstudiante"],$args["idDestinoRecursosEstudiante"]);
      $sql = "INSERT INTO Estudiante (idPersona,notaPostulacion,tituloBachiller,idTipoInstitucionProcedencia,idTipoBachillerato,poseeTituloEducacionSuperior,anoGraduacion,fechaInicioCarrrera,realizadoPracticasPreprofesionales,horasPracticasPreprofesionales,idTipoInstitucionPracticasPreprofesionales,idSectorEconomicoPracticasPreprofesionales,participadoProyectoVinculacion,idAlcanceProyectoVinculacion,nombreEmpresaTrabaja,idAreaEmpresaTrabaja,tituloEducacionSuperior,repetidoMateria,perdidoGratuidad,idOcupacionEstudiante,idDestinoRecursosEstudiante) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
      $fechaInicioCarrreraNoSQLTime = strtotime($estudiante->fechaInicioCarrrera);
      $fechaInicioCarrreraSQLTime = date("Y-m-d", $fechaInicioCarrreraNoSQLTime);
      $estudiante->fechaInicioCarrrera = $fechaInicioCarrreraSQLTime;
      $parametros = array($estudiante->idPersona,$estudiante->notaPostulacion,$estudiante->tituloBachiller,$estudiante->idTipoInstitucionProcedencia,$estudiante->idTipoBachillerato,$estudiante->poseeTituloEducacionSuperior,$estudiante->anoGraduacion,$estudiante->fechaInicioCarrrera,$estudiante->realizadoPracticasPreprofesionales,$estudiante->horasPracticasPreprofesionales,$estudiante->idTipoInstitucionPracticasPreprofesionales,$estudiante->idSectorEconomicoPracticasPreprofesionales,$estudiante->participadoProyectoVinculacion,$estudiante->idAlcanceProyectoVinculacion,$estudiante->nombreEmpresaTrabaja,$estudiante->idAreaEmpresaTrabaja,$estudiante->tituloEducacionSuperior,$estudiante->repetidoMateria,$estudiante->perdidoGratuidad,$estudiante->idOcupacionEstudiante,$estudiante->idDestinoRecursosEstudiante);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $estudiante = new Estudiante($args["id"],$args["idPersona"],$args["notaPostulacion"],$args["tituloBachiller"],$args["idTipoInstitucionProcedencia"],$args["idTipoBachillerato"],$args["poseeTituloEducacionSuperior"],$args["anoGraduacion"],$args["fechaInicioCarrrera"],$args["realizadoPracticasPreprofesionales"],$args["horasPracticasPreprofesionales"],$args["idTipoInstitucionPracticasPreprofesionales"],$args["idSectorEconomicoPracticasPreprofesionales"],$args["participadoProyectoVinculacion"],$args["idAlcanceProyectoVinculacion"],$args["nombreEmpresaTrabaja"],$args["idAreaEmpresaTrabaja"],$args["tituloEducacionSuperior"],$args["repetidoMateria"],$args["perdidoGratuidad"],$args["idOcupacionEstudiante"],$args["idDestinoRecursosEstudiante"]);
      $fechaInicioCarrreraNoSQLTime = strtotime($estudiante->fechaInicioCarrrera);
      $fechaInicioCarrreraSQLTime = date("Y-m-d", $fechaInicioCarrreraNoSQLTime);
      $estudiante->fechaInicioCarrrera = $fechaInicioCarrreraSQLTime;
      $parametros = array($estudiante->idPersona,$estudiante->notaPostulacion,$estudiante->tituloBachiller,$estudiante->idTipoInstitucionProcedencia,$estudiante->idTipoBachillerato,$estudiante->poseeTituloEducacionSuperior,$estudiante->anoGraduacion,$estudiante->fechaInicioCarrrera,$estudiante->realizadoPracticasPreprofesionales,$estudiante->horasPracticasPreprofesionales,$estudiante->idTipoInstitucionPracticasPreprofesionales,$estudiante->idSectorEconomicoPracticasPreprofesionales,$estudiante->participadoProyectoVinculacion,$estudiante->idAlcanceProyectoVinculacion,$estudiante->nombreEmpresaTrabaja,$estudiante->idAreaEmpresaTrabaja,$estudiante->tituloEducacionSuperior,$estudiante->repetidoMateria,$estudiante->perdidoGratuidad,$estudiante->idOcupacionEstudiante,$estudiante->idDestinoRecursosEstudiante,$estudiante->id);
      $sql = "UPDATE Estudiante SET idPersona = ?,notaPostulacion = ?,tituloBachiller = ?,idTipoInstitucionProcedencia = ?,idTipoBachillerato = ?,poseeTituloEducacionSuperior = ?,anoGraduacion = ?,fechaInicioCarrrera = ?,realizadoPracticasPreprofesionales = ?,horasPracticasPreprofesionales = ?,idTipoInstitucionPracticasPreprofesionales = ?,idSectorEconomicoPracticasPreprofesionales = ?,participadoProyectoVinculacion = ?,idAlcanceProyectoVinculacion = ?,nombreEmpresaTrabaja = ?,idAreaEmpresaTrabaja = ?,tituloEducacionSuperior = ?,repetidoMateria = ?,perdidoGratuidad = ?,idOcupacionEstudiante = ?,idDestinoRecursosEstudiante = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Estudiante WHERE id = ?;";
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
         $sql = "SELECT * FROM Estudiante;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Estudiante WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Estudiante LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Estudiante;";
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
            $sql = "SELECT * FROM Estudiante WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Estudiante WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Estudiante WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Estudiante WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}