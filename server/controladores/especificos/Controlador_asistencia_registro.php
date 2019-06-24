<?php
/*
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Asistencia.php');
class Controlador_asistencia_registro extends Controlador_Base
{    
      function actualizar(Asistencia $asistencia)
      {
            $parametros = array($asistencia->idMatriculaAsignatura,$asistencia->fecha,$asistencia->horas,$asistencia->id);
            $sql = "UPDATE Asistencia SET idMatriculaAsignatura = ?,fecha = ?,horas = ? WHERE id = ?;";
            $respuesta = $this->conexion->ejecutarConsulta($sql, $parametros);
            if (is_null($respuesta[0])) {
                  return true;
            } else {
                  return false;
            }
      }

      function leer(int $idMatriculaAsignatura)
      {
            $parametros = array($idMatriculaAsignatura);
            $sql = "SELECT MatriculaAsignatura.id as 'idMatriculaAsignatura', Persona.id as 'id', CONCAT(Persona.nombre1,' ',Persona.nombre2,' ',Persona.apellido1,' ',Persona.apellido2) as 'estudiante',Asistencia.fecha as 'fecha',Asistencia.horas as 'horas' FROM Persona INNER JOIN Matricula ON Persona.id = Matricula.idPersona INNER JOIN MatriculaAsignatura ON Matricula.id = MatriculaAsignatura.idMatricula INNER JOIN Asistencia ON Asistencia.idMatriculaAsignatura = MatriculaAsignatura.id WHERE MatriculaAsignatura.id = ?;";
            $respuesta = $this->conexion->ejecutarConsulta($sql, $parametros);
            // TODO : devolver un AsistenciaRegistro[] ordenado por estudiante y el vector asistenciadato ordenado por fecha, ver estructura esperada
            return $respuesta;
      }
}

/*class AsistenciaRegistro 
{
      int idMatriculaAsignatura;
      int id;
      string estudiante;
      AsistenciaDato[] asistencias: ;
}

class AsistenciaDato 
{
      date fecha;
      int horas;
}
+/