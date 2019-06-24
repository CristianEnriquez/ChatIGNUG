<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_asignacion_materias extends Controlador_Base
{
    function getEstudiantesCarrera($args)
    { 
        $idCarrera = $args["idCarrera"];
        $idPeriodoLectivo = $args["idPeriodoLectivo"];
        $sql = "SELECT Persona.id as 'idPersona', Matricula.id as 'idMatricula', Matricula.idJornada as 'idJornada', CONCAT(Persona.apellido1, ' ', Persona.apellido2, ' ', Persona.nombre1, ' ', Persona.nombre2) as 'nombreCompleto', Persona.identificacion FROM Persona INNER JOIN Matricula ON Matricula.idPersona = Persona.id WHERE Matricula.idCarrera = ? AND Matricula.idPeriodoLectivo = ? ORDER BY nombreCompleto ASC;";
        $parametros = array($idCarrera, $idPeriodoLectivo);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        return $respuesta;
    }

    function getAsignaturasMatricula($args)
    { 
        $idMatricula = $args["idMatricula"];
        $sql = "SELECT Asignatura.* FROM Asignatura INNER JOIN MatriculaAsignatura ON MatriculaAsignatura.idAsignatura = Asignatura.id WHERE idMatricula = ?;";
        $parametros = array($idMatricula);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        return $respuesta;
    }

    function getAsignaturasCarrera($args)
    { 
        $idCarrera = $args["idCarrera"];
        $sql = "SELECT Asignatura.* FROM Asignatura INNER JOIN Malla ON Asignatura.idMalla = Malla.id INNER JOIN Carrera ON Malla.idCarrera = Carrera.id WHERE Carrera.id = ? ORDER BY Asignatura.idPeriodoAcademico ASC;";
        $parametros = array($idCarrera);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        return $respuesta;
    }

    function getPeriodosLectivos()
    { 
        $sql = "SELECT * FROM PeriodoLectivo WHERE PeriodoLectivo.matriculable = 0;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        return $respuesta;
    }

    function getAsignaturasTomar($args)
    { 
        $idPersona = $args["idPersona"];
        $sql = "SELECT Asignatura.* FROM Cupo INNER JOIN AsignaturaCupo ON AsignaturaCupo.idCupo = Cupo.id INNER JOIN Asignatura ON AsignaturaCupo.idAsignatura = Asignatura.id INNER JOIN PeriodoLectivo ON Cupo.idPeriodoLectivo = PeriodoLectivo.id WHERE PeriodoLectivo.matriculable = 1 AND Cupo.idPersona = ?;";
        $parametros = array($idPersona);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        return $respuesta;
    }

    function createCupo($args)
    {
        $idPersona = $args["idPersona"];
        $idCarrera = $args["idCarrera"];
        $idJornada = $args["idJornada"];
        $nivel= $args["idPeriodoAcademico"];
        $asignaturasATomar = $args["asignaturasATomar"];
        $asignaturasATomarRegistradas = $args["asignaturasATomarRegistradas"];
        $idEstadoCupo = 1;
        $idTipoMatricula = 1;
        $paralelo = "A";
        $fecha = date("Y-m-d");
        $sql = "SELECT id as 'idJornadaCarrera' FROM JornadaCarrera WHERE idCarrera = ? AND idJornada = ?;";
        $parametros = array($idCarrera, $idJornada);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $idJornadaCarrera = $respuesta[0]["idJornadaCarrera"];
        $sql = "SELECT id as 'idPeriodoLectivo' FROM PeriodoLectivo WHERE matriculable = 1;";
        $parametros = array();
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $idPeriodoLectivo = $respuesta[0]["idPeriodoLectivo"];
        $sql = "INSERT INTO Cupo (idJornadaCarrera,idPersona,idEstadoCupo,idPeriodoLectivo,fecha,idTipoMatricula,paralelo,nivel) VALUES (?,?,?,?,?,?,?,?);";
        $parametros = array($idJornadaCarrera,$idPersona,$idEstadoCupo,$idPeriodoLectivo,$fecha,$idTipoMatricula,$paralelo,$nivel);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $sql = "UPDATE Cupo SET idJornadaCarrera = ? WHERE idPersona = ? AND idPeriodoLectivo = ?";
        $parametros = array($idJornadaCarrera,$idPersona,$idPeriodoLectivo);
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        $sql = "SELECT id as 'idCupo' FROM Cupo WHERE idPersona = ? AND idPeriodoLectivo = ?;";
        $parametros = array($idPersona,$idPeriodoLectivo);
        $cupo = $this->conexion->ejecutarConsulta($sql,$parametros);
        $sql = "SELECT id as 'idSolicitudMatricula' FROM SolicitudMatricula WHERE idPersona = ? AND idPeriodoLectivo = ?;";
        $parametros = array($idPersona,$idPeriodoLectivo);
        $solicitudMatricula = $this->conexion->ejecutarConsulta($sql,$parametros);
        $sql = "DELETE FROM SolicitudMatricula WHERE id = ?;";
        $parametros = array($solicitudMatricula[0]["idSolicitudMatricula"]);
        $r1 = $this->conexion->ejecutarConsulta($sql,$parametros);
        foreach ($asignaturasATomarRegistradas as $asignaturaATomarRegistrada) {
            $borrar = true;
            foreach ($asignaturasATomar as $asignaturaATomar) {
                if($asignaturaATomar["id"]==$asignaturaATomarRegistrada["id"]) {
                    $borrar = false;
                }
            }
            if ($borrar) {
                $sql = "SELECT id as 'idAsignaturaCupo' FROM AsignaturaCupo WHERE idAsignatura = ? AND idCupo = ?;";
                $parametros = array($asignaturaATomarRegistrada["id"],$cupo[0]["idCupo"]);
                $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
                $sql = "DELETE FROM AsignaturaCupo WHERE id = ?;";
                $parametros = array($respuesta[0]["idAsignaturaCupo"]);
                $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
            }
        }
        foreach ($asignaturasATomar as $asignaturaATomar) {
            $insertar = true;
            foreach ($asignaturasATomarRegistradas as $asignaturaATomarRegistrada) {
                if($asignaturaATomar["id"]==$asignaturasATomarRegistradas["id"]) {
                    $insertar = false;
                }
            }
            if ($insertar) {
                $sql = "INSERT INTO AsignaturaCupo (idAsignatura, idCupo) VALUES (?,?);";
                $parametros = array($asignaturaATomar["id"],$cupo[0]["idCupo"]);
                $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
            }
        }
        return true;
    }
}