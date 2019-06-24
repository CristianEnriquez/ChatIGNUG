<?php
class Estudiante
{
   public $id;
   public $idPersona;
   public $notaPostulacion;
   public $tituloBachiller;
   public $idTipoInstitucionProcedencia;
   public $idTipoBachillerato;
   public $poseeTituloEducacionSuperior;
   public $anoGraduacion;
   public $fechaInicioCarrrera;
   public $realizadoPracticasPreprofesionales;
   public $horasPracticasPreprofesionales;
   public $idTipoInstitucionPracticasPreprofesionales;
   public $idSectorEconomicoPracticasPreprofesionales;
   public $participadoProyectoVinculacion;
   public $idAlcanceProyectoVinculacion;
   public $nombreEmpresaTrabaja;
   public $idAreaEmpresaTrabaja;
   public $tituloEducacionSuperior;
   public $repetidoMateria;
   public $perdidoGratuidad;
   public $idOcupacionEstudiante;
   public $idDestinoRecursosEstudiante;

   function __construct($id,$idPersona,$notaPostulacion,$tituloBachiller,$idTipoInstitucionProcedencia,$idTipoBachillerato,$poseeTituloEducacionSuperior,$anoGraduacion,$fechaInicioCarrrera,$realizadoPracticasPreprofesionales,$horasPracticasPreprofesionales,$idTipoInstitucionPracticasPreprofesionales,$idSectorEconomicoPracticasPreprofesionales,$participadoProyectoVinculacion,$idAlcanceProyectoVinculacion,$nombreEmpresaTrabaja,$idAreaEmpresaTrabaja, $tituloEducacionSuperior, $repetidoMateria, $perdidoGratuidad, $idOcupacionEstudiante, $idDestinoRecursosEstudiante){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->notaPostulacion = $notaPostulacion;
      $this->tituloBachiller = $tituloBachiller;
      $this->idTipoInstitucionProcedencia = $idTipoInstitucionProcedencia;
      $this->idTipoBachillerato = $idTipoBachillerato;
      $this->poseeTituloEducacionSuperior = $poseeTituloEducacionSuperior;
      $this->anoGraduacion = $anoGraduacion;
      $this->fechaInicioCarrrera = $fechaInicioCarrrera;
      $this->realizadoPracticasPreprofesionales = $realizadoPracticasPreprofesionales;
      $this->horasPracticasPreprofesionales = $horasPracticasPreprofesionales;
      $this->idTipoInstitucionPracticasPreprofesionales = $idTipoInstitucionPracticasPreprofesionales;
      $this->idSectorEconomicoPracticasPreprofesionales = $idSectorEconomicoPracticasPreprofesionales;
      $this->participadoProyectoVinculacion = $participadoProyectoVinculacion;
      $this->idAlcanceProyectoVinculacion = $idAlcanceProyectoVinculacion;
      $this->nombreEmpresaTrabaja = $nombreEmpresaTrabaja;
      $this->idAreaEmpresaTrabaja = $idAreaEmpresaTrabaja;
      $this->tituloEducacionSuperior = $tituloEducacionSuperior;
      $this->repetidoMateria = $repetidoMateria;
      $this->perdidoGratuidad = $perdidoGratuidad;
      $this->idOcupacionEstudiante = $idOcupacionEstudiante;
      $this->idDestinoRecursosEstudiante = $idDestinoRecursosEstudiante;
   }
}
?>