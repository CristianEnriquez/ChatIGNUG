<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_chat extends Controlador_Base
{
    function consultar_salas($args)
    {
        $id = $args['id'];
        $sql = "SELECT * FROM Docente WHERE idPersona = $id;";
        $rol = "DOCENTE";
        $parametros = [];
        if (!$this->ejecutar_sql($sql, $parametros)){
            $sql = "SELECT * FROM Estudiante WHERE idPersona = $id;";
            $rol = "ESTUDIANTE";
            if (!$this->ejecutar_sql($sql, $parametros)){
                $rol = false;
            }
        }
        $salas = [];
        if ($rol === "DOCENTE") {
            $sql = "SELECT DISTINCT id as idPersona, CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as nombreCompleto FROM Persona;";
            array_push($salas, ["idSala"=>"yavirac", "nombre" => "YAVIRAC", "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            $sql = "SELECT DISTINCT idPersona, CONCAT(Persona.nombre1, ' ', Persona.nombre2, ' ', Persona.apellido1, ' ', Persona.apellido2) as nombreCompleto FROM Docente INNER JOIN Persona ON Persona.id = Docente.idPersona;";
            array_push($salas, ["idSala"=>"docentes", "nombre" => "DOCENTES", "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            $sql = "SELECT DISTINCT Asignatura.id, Asignatura.nombre FROM Docente INNER JOIN DocenteAsignatura ON Docente.id = DocenteAsignatura.idDocente INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = DocenteAsignatura.idPeriodoLectivo INNER JOIN Asignatura ON Asignatura.id = DocenteAsignatura.idAsignatura WHERE PeriodoLectivo.matriculable = 1 AND Docente.idPersona = $id;";
            $Asignaturas = $this->ejecutar_sql($sql, $parametros);
            foreach ($Asignaturas as $asignatura) {
                $sql = "SELECT DISTINCT Persona.id as idPersona, CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as nombreCompleto FROM Persona INNER JOIN Matricula ON Persona.id = Matricula.idPersona INNER JOIN MatriculaAsignatura ON Matricula.id = MatriculaAsignatura.idMatricula INNER JOIN PeriodoLectivo ON Matricula.idPeriodoLectivo = PeriodoLectivo.id WHERE PeriodoLectivo.matriculable = 1 AND MatriculaAsignatura.idAsignatura = ".$asignatura['id'].";";
                array_push($salas, ["idSala"=>$asignatura['id'], "nombre" => $asignatura['nombre'], "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            }
            $sql = "SELECT DISTINCT Carrera.id, CONCAT(Carrera.nombre, ' ', Malla.id) as nombre FROM Docente INNER JOIN DocenteAsignatura ON Docente.id = DocenteAsignatura.idDocente INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = DocenteAsignatura.idPeriodoLectivo INNER JOIN Asignatura ON Asignatura.id = DocenteAsignatura.idAsignatura INNER JOIN Malla ON Malla.id = Asignatura.idMalla INNER JOIN Carrera ON Malla.idCarrera = Carrera.id WHERE PeriodoLectivo.matriculable = 1 AND Docente.idPersona = $id;";
            $Carreras = $this->ejecutar_sql($sql, $parametros);
            foreach ($Carreras as $carrera) {
                $sql = "SELECT DISTINCT Persona.id as idPersona, CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as nombreCompleto FROM Persona INNER JOIN Matricula ON Persona.id = Matricula.idPersona INNER JOIN PeriodoLectivo ON Matricula.idPeriodoLectivo = PeriodoLectivo.id INNER JOIN Carrera ON Matricula.idCarrera = Carrera.id WHERE PeriodoLectivo.matriculable = 1 AND Carrera.id = 1;";
                array_push($salas, ["idSala"=>$carrera['id'], "nombre" => $carrera['nombre'], "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            }
        }
        if ($rol === "ESTUDIANTE") {
            $sql = "SELECT DISTINCT Persona.id as idPersona, CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as nombreCompleto FROM Persona;";
            array_push($salas, ["idSala"=>"yavirac", "nombre" => "YAVIRAC", "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            $sql = "SELECT DISTINCT idPersona, CONCAT(Persona.nombre1, ' ', Persona.nombre2, ' ', Persona.apellido1, ' ', Persona.apellido2) as nombreCompleto FROM Estudiante INNER JOIN Persona ON Persona.id = Estudiante.idPersona;";
            array_push($salas, ["idSala"=>"estudiantes", "nombre" => "ESTUDIANTES", "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            $sql = "SELECT DISTINCT Asignatura.id, Asignatura.nombre FROM Estudiante INNER JOIN Matricula ON Matricula.idPersona = Estudiante.idPersona INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Matricula.idPeriodoLectivo INNER JOIN MatriculaAsignatura ON MatriculaAsignatura.idMatricula = Matricula.id INNER JOIN Asignatura ON Asignatura.id = MatriculaAsignatura.idAsignatura INNER JOIN Carrera ON Carrera.id = Matricula.idCarrera WHERE PeriodoLectivo.matriculable = 1 AND Estudiante.idPersona = $id;";
            $Asignaturas = $this->ejecutar_sql($sql, $parametros);
            foreach ($Asignaturas as $asignatura) {
                $sql = "SELECT DISTINCT Persona.id as idPersona, CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as nombreCompleto FROM Persona INNER JOIN Matricula ON Persona.id = Matricula.idPersona INNER JOIN MatriculaAsignatura ON Matricula.id = MatriculaAsignatura.idMatricula INNER JOIN PeriodoLectivo ON Matricula.idPeriodoLectivo = PeriodoLectivo.id WHERE PeriodoLectivo.matriculable = 1 AND MatriculaAsignatura.idAsignatura = ".$asignatura['id'].";";
                array_push($salas, ["idSala"=>$asignatura['id'], "nombre" => $asignatura['nombre'], "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            }
            $sql = "SELECT DISTINCT Carrera.id, Carrera.nombre FROM Estudiante INNER JOIN Matricula ON Matricula.idPersona = Estudiante.idPersona INNER JOIN PeriodoLectivo ON PeriodoLectivo.id = Matricula.idPeriodoLectivo INNER JOIN MatriculaAsignatura ON MatriculaAsignatura.idMatricula = Matricula.id INNER JOIN Asignatura ON Asignatura.id = MatriculaAsignatura.idAsignatura INNER JOIN Carrera ON Carrera.id = Matricula.idCarrera WHERE PeriodoLectivo.matriculable = 1 AND Estudiante.idPersona = $id;";
            $Carreras = $this->ejecutar_sql($sql, $parametros);
            foreach ($Carreras as $carrera) {
                $sql = "SELECT DISTINCT Persona.id as idPersona, CONCAT(nombre1, ' ', nombre2, ' ', apellido1, ' ', apellido2) as nombreCompleto FROM Persona INNER JOIN Matricula ON Persona.id = Matricula.idPersona INNER JOIN PeriodoLectivo ON Matricula.idPeriodoLectivo = PeriodoLectivo.id INNER JOIN Carrera ON Matricula.idCarrera = Carrera.id WHERE PeriodoLectivo.matriculable = 1 AND Carrera.id = 1;";
                array_push($salas, ["idSala"=>$carrera['id'], "nombre" => $carrera['nombre'], "miembros" => $this->ejecutar_sql($sql, $parametros)]);
            }
        }
        return json_encode($salas);
    }
    

    function ejecutar_sql($sql, $parametros){
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }
    }
}