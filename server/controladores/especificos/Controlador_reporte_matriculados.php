<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_reporte_matriculados extends Controlador_Base
{
    function consultar($args)
    {
        $idCarrera = $args["idCarrera"];
        $nivel = $args["nivel"];
        $fecha = date("Ymd");
        $sql = "SELECT siglas FROM Carrera WHERE id= ?;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $siglas = $respuesta[0]["siglas"];
        $sql = "SELECT id as 'idPeriodoLectivo' FROM PeriodoLectivo WHERE matriculable = 1;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $idPeriodoLectivo = $respuesta[0]["idPeriodoLectivo"];
        if($nivel == 7) {
            $sql = "SELECT 
            Persona.idTipoDocumento as tipoDocumentoId, 
            Persona.identificacion as numeroIdentificacion, 
            Persona.apellido1 as primerApellido,
            Persona.apellido2 as segundoApellido,
            Persona.nombre1 as primerNombre,
            Persona.nombre2 as segundoNombre,
            Persona.idGenero as sexoId,
            Persona.idGenero as generoId,
            Persona.idEstadoCivil as estadocivilId,
            CASE WHEN Persona.idEtnia = 26 THEN 6 WHEN Persona.idEtnia = 4 THEN 2 WHEN Persona.idEtnia = 27 THEN 7 WHEN Persona.idEtnia = 4 THEN 3 WHEN Persona.idEtnia = 30 THEN 4 WHEN Persona.idEtnia = 5 THEN 5 WHEN Persona.idEtnia = 31 THEN 8 ELSE 1 END as etniaId,
            CASE WHEN Persona.idEtnia = 26 OR Persona.idEtnia = 4 OR Persona.idEtnia = 27 OR Persona.idEtnia = 4 OR Persona.idEtnia = 30 OR Persona.idEtnia = 5 OR Persona.idEtnia = 31 THEN 34 ELSE Persona.etniaEspecifica END as pueblonacionalidadId,
            Persona.idTipoSangre as tipoSangre,
            CASE WHEN Persona.carnetConadis THEN 1 ELSE 2 END as discapacidad,
            CASE WHEN Persona.porcentajeDiscapacidad = 0 THEN 'NA' ELSE FLOOR(Persona.porcentajeDiscapacidad) END as porcentajeDiscapacidad,
            CASE WHEN Persona.numeroCarnetConadis is null THEN 'NA' ELSE Persona.numeroCarnetConadis END as numCarnetConadis,
            Persona.porcentajeDiscapacidad as tipoDiscapacidad,
            CASE WHEN Persona.idTipoDiscapacidad = 0 THEN 7 ELSE Persona.idTipoDiscapacidad END as tipoDiscapacidad,
            DATE_FORMAT(Persona.fechaNacimiento, \"%Y-%m-%d\")  as fechaNacimiento,
            CASE WHEN Persona.idUbicacionNacimientoPais = 343 THEN 43 WHEN Persona.idUbicacionNacimientoPais = 315 THEN 51 WHEN Persona.idUbicacionNacimientoPais = 108 THEN 64 WHEN Persona.idUbicacionNacimientoPais = 302 THEN 66 WHEN Persona.idUbicacionNacimientoPais = 348 THEN 172 WHEN Persona.idUbicacionNacimientoPais = 351 THEN 237 ELSE 56 END as paisNacionalidadId,
            substring_index(Persona.idUbicacionNacimientoProvincia,'.',-1) as provinciaNacimientoId,
            substring_index(Persona.idUbicacionNacimientoCanton,'.',-1) as cantonNacimientoId,
            56 as paisResidenciaId,
            substring_index(Persona.idUbicacionDomicilioProvincia,'.',-1) as provinciaResidenciaId,
            substring_index(Persona.idUbicacionDomicilioCanton,'.',-1) as cantonResidenciaId,
            Estudiante.idTipoInstitucionProcedencia as tipoColegioId,
            Carrera.idModalidadCarrera as modalidadCarrera,
            Jornada.id as jornadaCarrera,
            DATE_FORMAT(Estudiante.fechaInicioCarrrera, \"%Y-%m-%d\")  as fechaInicioCarrera,
            DATE_FORMAT(Matricula.fecha, \"%Y-%m-%d\")  as fechaMatricula,
            Cupo.idTipoMatricula as tipoMatriculaId,
            Cupo.nivel as nivelAcademicoQueCursa,
            18 as duracionPeriodoAcademico,
            CASE WHEN Estudiante.repetidoMateria THEN 1 ELSE 2 END as haRepetidoAlMenosUnaMateria,
            Cupo.paralelo as paraleloId,
            CASE WHEN Estudiante.perdidoGratuidad THEN 1 ELSE 2 END as haPerdidoLaGratuidad,
            3 as recibePensionDiferenciada,
            Estudiante.idOcupacionEstudiante as estudianteocupacionId,
            Persona.idIngresos as ingresosestudianteId,
            CASE WHEN Persona.bonoDesarrolloHumano THEN 1 ELSE 2 END as bonodesarrolloId,
            CASE WHEN Estudiante.realizadoPracticasPreprofesionales THEN 1 ELSE 2 END as haRealizadoPracticasPreprofesionales,
            Estudiante.horasPracticasPreprofesionales as nroHorasPracticasPreprofesionalesPorPeriodo,
            Estudiante.idTipoInstitucionPracticasPreprofesionales as entornoInstitucionalPracticasProfesionales,
            Estudiante.idSectorEconomicoPracticasPreprofesionales as sectorEconomicoPracticaProfesional,
            3 as tipoBecaId,
            2 as primeraRazonBecaId,
            2 as segundaRazonBecaId,
            2 as terceraRazonBecaId,
            2 as cuartaRazonBecaId,
            2 as quintaRazonBecaId,
            2 as sextaRazonBecaId,
            'NA' as montoBeca,
            'NA' as porcientoBecaCoberturaArancel,
            'NA' as porcientoBecaCoberturaManuntencion,
            4 as financiamientoBeca,
            'NA' as montoAyudaEconomica,
            'NA' as montoCreditoEducativo,
            CASE WHEN Estudiante.participadoProyectoVinculacion THEN 1 ELSE 2 END as participaEnProyectoVinculacionSociedad,
            CASE WheN Estudiante.idAlcanceProyectoVinculacion = 0 THEN 'NA' ELSE Estudiante.idAlcanceProyectoVinculacion END as tipoAlcanceProyectoVinculacionId,
            Persona.correoElectronicoInstitucional as correoElectronico,
            Persona.telefonoCelular as numeroCelular,
            Persona.idNivelEstudioPadre as nivelFormacionPadre,
            Persona.idNivelEstudioMadre as nivelFormacionMadre,
            TipoIngresos.descripcion as ingresoTotalHogar,
            Persona.miembrosHogar as cantidadMiembrosHogar
            FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN TipoIngresos ON TipoIngresos.id = Persona.idIngresos INNER JOIN Estudiante ON Estudiante.idPersona = Persona.id INNER JOIN JornadaCarrera ON JornadaCarrera.id = Cupo.idJornadaCarrera INNER JOIN Carrera ON Carrera.id = JornadaCarrera.idCarrera INNER JOIN Jornada ON JornadaCarrera.idJornada = Jornada.id INNER JOIN Matricula ON Cupo.idPersona = Matricula.idPersona WHERE Cupo.idPeriodoLectivo = 4 AND Matricula.idPeriodoLectivo = 4 AND Carrera.id = ?;";
            $parametros = array($idCarrera);
            $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        }else {
            $sql = "SELECT 
            Persona.idTipoDocumento as tipoDocumentoId, 
            Persona.identificacion as numeroIdentificacion, 
            Persona.apellido1 as primerApellido,
            Persona.apellido2 as segundoApellido,
            Persona.nombre1 as primerNombre,
            Persona.nombre2 as segundoNombre,
            Persona.idGenero as sexoId,
            Persona.idGenero as generoId,
            Persona.idEstadoCivil as estadocivilId,
            CASE WHEN Persona.idEtnia = 26 THEN 6 WHEN Persona.idEtnia = 4 THEN 2 WHEN Persona.idEtnia = 27 THEN 7 WHEN Persona.idEtnia = 4 THEN 3 WHEN Persona.idEtnia = 30 THEN 4 WHEN Persona.idEtnia = 5 THEN 5 WHEN Persona.idEtnia = 31 THEN 8 ELSE 1 END as etniaId,
            CASE WHEN Persona.idEtnia = 26 OR Persona.idEtnia = 4 OR Persona.idEtnia = 27 OR Persona.idEtnia = 4 OR Persona.idEtnia = 30 OR Persona.idEtnia = 5 OR Persona.idEtnia = 31 THEN 34 ELSE Persona.etniaEspecifica END as pueblonacionalidadId,
            Persona.idTipoSangre as tipoSangre,
            CASE WHEN Persona.carnetConadis THEN 1 ELSE 2 END as discapacidad,
            CASE WHEN Persona.porcentajeDiscapacidad = 0 THEN 'NA' ELSE FLOOR(Persona.porcentajeDiscapacidad) END as porcentajeDiscapacidad,
            CASE WHEN Persona.numeroCarnetConadis is null THEN 'NA' ELSE Persona.numeroCarnetConadis END as numCarnetConadis,
            Persona.porcentajeDiscapacidad as tipoDiscapacidad,
            CASE WHEN Persona.idTipoDiscapacidad = 0 THEN 7 ELSE Persona.idTipoDiscapacidad END as tipoDiscapacidad,
            DATE_FORMAT(Persona.fechaNacimiento, \"%Y-%m-%d\")  as fechaNacimiento,
            CASE WHEN Persona.idUbicacionNacimientoPais = 343 THEN 43 WHEN Persona.idUbicacionNacimientoPais = 315 THEN 51 WHEN Persona.idUbicacionNacimientoPais = 108 THEN 64 WHEN Persona.idUbicacionNacimientoPais = 302 THEN 66 WHEN Persona.idUbicacionNacimientoPais = 348 THEN 172 WHEN Persona.idUbicacionNacimientoPais = 351 THEN 237 ELSE 56 END as paisNacionalidadId,
            substring_index(Persona.idUbicacionNacimientoProvincia,'.',-1) as provinciaNacimientoId,
            substring_index(Persona.idUbicacionNacimientoCanton,'.',-1) as cantonNacimientoId,
            56 as paisResidenciaId,
            substring_index(Persona.idUbicacionDomicilioProvincia,'.',-1) as provinciaResidenciaId,
            substring_index(Persona.idUbicacionDomicilioCanton,'.',-1) as cantonResidenciaId,
            Estudiante.idTipoInstitucionProcedencia as tipoColegioId,
            Carrera.idModalidadCarrera as modalidadCarrera,
            Jornada.id as jornadaCarrera,
            DATE_FORMAT(Estudiante.fechaInicioCarrrera, \"%Y-%m-%d\")  as fechaInicioCarrera,
            DATE_FORMAT(Matricula.fecha, \"%Y-%m-%d\")  as fechaMatricula,
            Cupo.idTipoMatricula as tipoMatriculaId,
            Cupo.nivel as nivelAcademicoQueCursa,
            18 as duracionPeriodoAcademico,
            CASE WHEN Estudiante.repetidoMateria THEN 1 ELSE 2 END as haRepetidoAlMenosUnaMateria,
            Cupo.paralelo as paraleloId,
            CASE WHEN Estudiante.perdidoGratuidad THEN 1 ELSE 2 END as haPerdidoLaGratuidad,
            3 as recibePensionDiferenciada,
            Estudiante.idOcupacionEstudiante as estudianteocupacionId,
            Persona.idIngresos as ingresosestudianteId,
            CASE WHEN Persona.bonoDesarrolloHumano THEN 1 ELSE 2 END as bonodesarrolloId,
            CASE WHEN Estudiante.realizadoPracticasPreprofesionales THEN 1 ELSE 2 END as haRealizadoPracticasPreprofesionales,
            Estudiante.horasPracticasPreprofesionales as nroHorasPracticasPreprofesionalesPorPeriodo,
            Estudiante.idTipoInstitucionPracticasPreprofesionales as entornoInstitucionalPracticasProfesionales,
            Estudiante.idSectorEconomicoPracticasPreprofesionales as sectorEconomicoPracticaProfesional,
            3 as tipoBecaId,
            2 as primeraRazonBecaId,
            2 as segundaRazonBecaId,
            2 as terceraRazonBecaId,
            2 as cuartaRazonBecaId,
            2 as quintaRazonBecaId,
            2 as sextaRazonBecaId,
            'NA' as montoBeca,
            'NA' as porcientoBecaCoberturaArancel,
            'NA' as porcientoBecaCoberturaManuntencion,
            4 as financiamientoBeca,
            'NA' as montoAyudaEconomica,
            'NA' as montoCreditoEducativo,
            CASE WHEN Estudiante.participadoProyectoVinculacion THEN 1 ELSE 2 END as participaEnProyectoVinculacionSociedad,
            CASE WheN Estudiante.idAlcanceProyectoVinculacion = 0 THEN 'NA' ELSE Estudiante.idAlcanceProyectoVinculacion END as tipoAlcanceProyectoVinculacionId,
            Persona.correoElectronicoInstitucional as correoElectronico,
            Persona.telefonoCelular as numeroCelular,
            Persona.idNivelEstudioPadre as nivelFormacionPadre,
            Persona.idNivelEstudioMadre as nivelFormacionMadre,
            TipoIngresos.descripcion as ingresoTotalHogar,
            Persona.miembrosHogar as cantidadMiembrosHogar
            FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN TipoIngresos ON TipoIngresos.id = Persona.idIngresos INNER JOIN Estudiante ON Estudiante.idPersona = Persona.id INNER JOIN JornadaCarrera ON JornadaCarrera.id = Cupo.idJornadaCarrera INNER JOIN Carrera ON Carrera.id = JornadaCarrera.idCarrera INNER JOIN Jornada ON JornadaCarrera.idJornada = Jornada.id INNER JOIN Matricula ON Cupo.idPersona = Matricula.idPersona WHERE Cupo.idPeriodoLectivo = 4 AND Matricula.idPeriodoLectivo = 4 AND Carrera.id = ? AND Cupo.nivel = ?;";
            $parametros = array($idCarrera, $nivel);
            $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        }
        return $respuesta;
    }

    function descargar($args)
    {
        $idCarrera = $args["idCarrera"];
        $nivel = $args["nivel"];
        $fecha = date("Ymd");
        $sql = "SELECT siglas FROM Carrera WHERE id= ?;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $siglas = $respuesta[0]["siglas"];
        $sql = "SELECT id as 'idPeriodoLectivo' FROM PeriodoLectivo WHERE matriculable = 1;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $idPeriodoLectivo = $respuesta[0]["idPeriodoLectivo"];
        if($nivel == 7) {
            $sql = "SELECT 
            Persona.idTipoDocumento as tipoDocumentoId, 
            Persona.identificacion as numeroIdentificacion, 
            Persona.apellido1 as primerApellido,
            Persona.apellido2 as segundoApellido,
            Persona.nombre1 as primerNombre,
            Persona.nombre2 as segundoNombre,
            Persona.idGenero as sexoId,
            Persona.idGenero as generoId,
            Persona.idEstadoCivil as estadocivilId,
            CASE WHEN Persona.idEtnia = 26 THEN 6 WHEN Persona.idEtnia = 4 THEN 2 WHEN Persona.idEtnia = 27 THEN 7 WHEN Persona.idEtnia = 4 THEN 3 WHEN Persona.idEtnia = 30 THEN 4 WHEN Persona.idEtnia = 5 THEN 5 WHEN Persona.idEtnia = 31 THEN 8 ELSE 1 END as etniaId,
            CASE WHEN Persona.idEtnia = 26 OR Persona.idEtnia = 4 OR Persona.idEtnia = 27 OR Persona.idEtnia = 4 OR Persona.idEtnia = 30 OR Persona.idEtnia = 5 OR Persona.idEtnia = 31 THEN 34 ELSE Persona.etniaEspecifica END as pueblonacionalidadId,
            Persona.idTipoSangre as tipoSangre,
            CASE WHEN Persona.carnetConadis THEN 1 ELSE 2 END as discapacidad,
            CASE WHEN Persona.porcentajeDiscapacidad = 0 THEN 'NA' ELSE FLOOR(Persona.porcentajeDiscapacidad) END as porcentajeDiscapacidad,
            CASE WHEN Persona.numeroCarnetConadis is null THEN 'NA' ELSE Persona.numeroCarnetConadis END as numCarnetConadis,
            Persona.porcentajeDiscapacidad as tipoDiscapacidad,
            CASE WHEN Persona.idTipoDiscapacidad = 0 THEN 7 ELSE Persona.idTipoDiscapacidad END as tipoDiscapacidad,
            DATE_FORMAT(Persona.fechaNacimiento, \"%Y-%m-%d\")  as fechaNacimiento,
            CASE WHEN Persona.idUbicacionNacimientoPais = 343 THEN 43 WHEN Persona.idUbicacionNacimientoPais = 315 THEN 51 WHEN Persona.idUbicacionNacimientoPais = 108 THEN 64 WHEN Persona.idUbicacionNacimientoPais = 302 THEN 66 WHEN Persona.idUbicacionNacimientoPais = 348 THEN 172 WHEN Persona.idUbicacionNacimientoPais = 351 THEN 237 ELSE 56 END as paisNacionalidadId,
            substring_index(Persona.idUbicacionNacimientoProvincia,'.',-1) as provinciaNacimientoId,
            substring_index(Persona.idUbicacionNacimientoCanton,'.',-1) as cantonNacimientoId,
            56 as paisResidenciaId,
            substring_index(Persona.idUbicacionDomicilioProvincia,'.',-1) as provinciaResidenciaId,
            substring_index(Persona.idUbicacionDomicilioCanton,'.',-1) as cantonResidenciaId,
            Estudiante.idTipoInstitucionProcedencia as tipoColegioId,
            Carrera.idModalidadCarrera as modalidadCarrera,
            Jornada.id as jornadaCarrera,
            DATE_FORMAT(Estudiante.fechaInicioCarrrera, \"%Y-%m-%d\")  as fechaInicioCarrera,
            DATE_FORMAT(Matricula.fecha, \"%Y-%m-%d\")  as fechaMatricula,
            Cupo.idTipoMatricula as tipoMatriculaId,
            Cupo.nivel as nivelAcademicoQueCursa,
            18 as duracionPeriodoAcademico,
            CASE WHEN Estudiante.repetidoMateria THEN 1 ELSE 2 END as haRepetidoAlMenosUnaMateria,
            Cupo.paralelo as paraleloId,
            CASE WHEN Estudiante.perdidoGratuidad THEN 1 ELSE 2 END as haPerdidoLaGratuidad,
            3 as recibePensionDiferenciada,
            Estudiante.idOcupacionEstudiante as estudianteocupacionId,
            Persona.idIngresos as ingresosestudianteId,
            CASE WHEN Persona.bonoDesarrolloHumano THEN 1 ELSE 2 END as bonodesarrolloId,
            CASE WHEN Estudiante.realizadoPracticasPreprofesionales THEN 1 ELSE 2 END as haRealizadoPracticasPreprofesionales,
            Estudiante.horasPracticasPreprofesionales as nroHorasPracticasPreprofesionalesPorPeriodo,
            Estudiante.idTipoInstitucionPracticasPreprofesionales as entornoInstitucionalPracticasProfesionales,
            Estudiante.idSectorEconomicoPracticasPreprofesionales as sectorEconomicoPracticaProfesional,
            3 as tipoBecaId,
            2 as primeraRazonBecaId,
            2 as segundaRazonBecaId,
            2 as terceraRazonBecaId,
            2 as cuartaRazonBecaId,
            2 as quintaRazonBecaId,
            2 as sextaRazonBecaId,
            'NA' as montoBeca,
            'NA' as porcientoBecaCoberturaArancel,
            'NA' as porcientoBecaCoberturaManuntencion,
            4 as financiamientoBeca,
            'NA' as montoAyudaEconomica,
            'NA' as montoCreditoEducativo,
            CASE WHEN Estudiante.participadoProyectoVinculacion THEN 1 ELSE 2 END as participaEnProyectoVinculacionSociedad,
            CASE WheN Estudiante.idAlcanceProyectoVinculacion = 0 THEN 'NA' ELSE Estudiante.idAlcanceProyectoVinculacion END as tipoAlcanceProyectoVinculacionId,
            Persona.correoElectronicoInstitucional as correoElectronico,
            Persona.telefonoCelular as numeroCelular,
            Persona.idNivelEstudioPadre as nivelFormacionPadre,
            Persona.idNivelEstudioMadre as nivelFormacionMadre,
            TipoIngresos.descripcion as ingresoTotalHogar,
            Persona.miembrosHogar as cantidadMiembrosHogar
            FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN TipoIngresos ON TipoIngresos.id = Persona.idIngresos INNER JOIN Estudiante ON Estudiante.idPersona = Persona.id INNER JOIN JornadaCarrera ON JornadaCarrera.id = Cupo.idJornadaCarrera INNER JOIN Carrera ON Carrera.id = JornadaCarrera.idCarrera INNER JOIN Jornada ON JornadaCarrera.idJornada = Jornada.id INNER JOIN Matricula ON Cupo.idPersona = Matricula.idPersona WHERE Cupo.idPeriodoLectivo = 4 AND Matricula.idPeriodoLectivo = 4 AND Carrera.id = ?;";
            $parametros = array($idCarrera);
            $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        }else {
            $sql = "SELECT 
            Persona.idTipoDocumento as tipoDocumentoId, 
            Persona.identificacion as numeroIdentificacion, 
            Persona.apellido1 as primerApellido,
            Persona.apellido2 as segundoApellido,
            Persona.nombre1 as primerNombre,
            Persona.nombre2 as segundoNombre,
            Persona.idGenero as sexoId,
            Persona.idGenero as generoId,
            Persona.idEstadoCivil as estadocivilId,
            CASE WHEN Persona.idEtnia = 26 THEN 6 WHEN Persona.idEtnia = 4 THEN 2 WHEN Persona.idEtnia = 27 THEN 7 WHEN Persona.idEtnia = 4 THEN 3 WHEN Persona.idEtnia = 30 THEN 4 WHEN Persona.idEtnia = 5 THEN 5 WHEN Persona.idEtnia = 31 THEN 8 ELSE 1 END as etniaId,
            CASE WHEN Persona.idEtnia = 26 OR Persona.idEtnia = 4 OR Persona.idEtnia = 27 OR Persona.idEtnia = 4 OR Persona.idEtnia = 30 OR Persona.idEtnia = 5 OR Persona.idEtnia = 31 THEN 34 ELSE Persona.etniaEspecifica END as pueblonacionalidadId,
            Persona.idTipoSangre as tipoSangre,
            CASE WHEN Persona.carnetConadis THEN 1 ELSE 2 END as discapacidad,
            CASE WHEN Persona.porcentajeDiscapacidad = 0 THEN 'NA' ELSE FLOOR(Persona.porcentajeDiscapacidad) END as porcentajeDiscapacidad,
            CASE WHEN Persona.numeroCarnetConadis is null THEN 'NA' ELSE Persona.numeroCarnetConadis END as numCarnetConadis,
            Persona.porcentajeDiscapacidad as tipoDiscapacidad,
            CASE WHEN Persona.idTipoDiscapacidad = 0 THEN 7 ELSE Persona.idTipoDiscapacidad END as tipoDiscapacidad,
            DATE_FORMAT(Persona.fechaNacimiento, \"%Y-%m-%d\")  as fechaNacimiento,
            CASE WHEN Persona.idUbicacionNacimientoPais = 343 THEN 43 WHEN Persona.idUbicacionNacimientoPais = 315 THEN 51 WHEN Persona.idUbicacionNacimientoPais = 108 THEN 64 WHEN Persona.idUbicacionNacimientoPais = 302 THEN 66 WHEN Persona.idUbicacionNacimientoPais = 348 THEN 172 WHEN Persona.idUbicacionNacimientoPais = 351 THEN 237 ELSE 56 END as paisNacionalidadId,
            substring_index(Persona.idUbicacionNacimientoProvincia,'.',-1) as provinciaNacimientoId,
            substring_index(Persona.idUbicacionNacimientoCanton,'.',-1) as cantonNacimientoId,
            56 as paisResidenciaId,
            substring_index(Persona.idUbicacionDomicilioProvincia,'.',-1) as provinciaResidenciaId,
            substring_index(Persona.idUbicacionDomicilioCanton,'.',-1) as cantonResidenciaId,
            Estudiante.idTipoInstitucionProcedencia as tipoColegioId,
            Carrera.idModalidadCarrera as modalidadCarrera,
            Jornada.id as jornadaCarrera,
            DATE_FORMAT(Estudiante.fechaInicioCarrrera, \"%Y-%m-%d\")  as fechaInicioCarrera,
            DATE_FORMAT(Matricula.fecha, \"%Y-%m-%d\")  as fechaMatricula,
            Cupo.idTipoMatricula as tipoMatriculaId,
            Cupo.nivel as nivelAcademicoQueCursa,
            18 as duracionPeriodoAcademico,
            CASE WHEN Estudiante.repetidoMateria THEN 1 ELSE 2 END as haRepetidoAlMenosUnaMateria,
            Cupo.paralelo as paraleloId,
            CASE WHEN Estudiante.perdidoGratuidad THEN 1 ELSE 2 END as haPerdidoLaGratuidad,
            3 as recibePensionDiferenciada,
            Estudiante.idOcupacionEstudiante as estudianteocupacionId,
            Persona.idIngresos as ingresosestudianteId,
            CASE WHEN Persona.bonoDesarrolloHumano THEN 1 ELSE 2 END as bonodesarrolloId,
            CASE WHEN Estudiante.realizadoPracticasPreprofesionales THEN 1 ELSE 2 END as haRealizadoPracticasPreprofesionales,
            Estudiante.horasPracticasPreprofesionales as nroHorasPracticasPreprofesionalesPorPeriodo,
            Estudiante.idTipoInstitucionPracticasPreprofesionales as entornoInstitucionalPracticasProfesionales,
            Estudiante.idSectorEconomicoPracticasPreprofesionales as sectorEconomicoPracticaProfesional,
            3 as tipoBecaId,
            2 as primeraRazonBecaId,
            2 as segundaRazonBecaId,
            2 as terceraRazonBecaId,
            2 as cuartaRazonBecaId,
            2 as quintaRazonBecaId,
            2 as sextaRazonBecaId,
            'NA' as montoBeca,
            'NA' as porcientoBecaCoberturaArancel,
            'NA' as porcientoBecaCoberturaManuntencion,
            4 as financiamientoBeca,
            'NA' as montoAyudaEconomica,
            'NA' as montoCreditoEducativo,
            CASE WHEN Estudiante.participadoProyectoVinculacion THEN 1 ELSE 2 END as participaEnProyectoVinculacionSociedad,
            CASE WheN Estudiante.idAlcanceProyectoVinculacion = 0 THEN 'NA' ELSE Estudiante.idAlcanceProyectoVinculacion END as tipoAlcanceProyectoVinculacionId,
            Persona.correoElectronicoInstitucional as correoElectronico,
            Persona.telefonoCelular as numeroCelular,
            Persona.idNivelEstudioPadre as nivelFormacionPadre,
            Persona.idNivelEstudioMadre as nivelFormacionMadre,
            TipoIngresos.descripcion as ingresoTotalHogar,
            Persona.miembrosHogar as cantidadMiembrosHogar
            FROM Persona INNER JOIN Cupo ON Cupo.idPersona = Persona.id INNER JOIN TipoIngresos ON TipoIngresos.id = Persona.idIngresos INNER JOIN Estudiante ON Estudiante.idPersona = Persona.id INNER JOIN JornadaCarrera ON JornadaCarrera.id = Cupo.idJornadaCarrera INNER JOIN Carrera ON Carrera.id = JornadaCarrera.idCarrera INNER JOIN Jornada ON JornadaCarrera.idJornada = Jornada.id INNER JOIN Matricula ON Cupo.idPersona = Matricula.idPersona WHERE Cupo.idPeriodoLectivo = 4 AND Matricula.idPeriodoLectivo = 4 AND Carrera.id = ? AND Cupo.nivel = ?;";
            $parametros = array($idCarrera, $nivel);
            $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        }
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Encoding: UTF-8');
        header('Content-Disposition: attachment; filename='.$siglas.$fecha.'.csv');
        echo "\xEF\xBB\xBF";
        $salida = "";
        foreach($respuesta[0] as $field => $value) { 
            $salida.=$field.';';
        }
        $salida.="\n";
        foreach($respuesta as $registro) {
            foreach($registro as $field => $value) { 
                $salida.=$value.';';
            }
            $salida.="\n";
        }
        echo $salida;
        exit;
    }
}