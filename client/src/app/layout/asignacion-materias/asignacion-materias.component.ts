import { AsignaturaCupoService } from 'app/CRUD/asignaturacupo/asignaturacupo.service';
import { AsignaturaCupo } from 'app/entidades/CRUD/AsignaturaCupo';
import { AsignacionMateriasService } from './asignacion-materias.service';
import { Asignatura } from './../../entidades/CRUD/Asignatura';
import { EstudianteAsignacionMateria } from './../../entidades/especifico/EstudianteAsignacionMateria';
import { PeriodoLectivo } from 'app/entidades/CRUD/PeriodoLectivo';
import { JornadaService } from './../../CRUD/jornada/jornada.service';
import { Jornada } from 'app/entidades/CRUD/Jornada';
import { Carrera } from 'app/entidades/CRUD/Carrera';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PeriodoAcademico } from 'app/entidades/CRUD/PeriodoAcademico';
import { PeriodoAcademicoService } from 'app/CRUD/periodoacademico/periodoacademico.service';

@Component({
    selector: 'app-asignacion-materias',
    templateUrl: './asignacion-materias.component.html',
    styleUrls: ['./asignacion-materias.component.scss']
})
export class AsignacionMateriasComponent implements OnInit {
    busy: Promise<any>;
    carreras: Carrera[];
    jornadas: Jornada[];
    periodosLectivos: PeriodoLectivo[];
    idCarreraSeleccionada: number;
    idJornada: number;
    filtroListo: Boolean;
    estudianteAsignacion: EstudianteAsignacionMateria;
    estudianteSeleccionadoLista: Boolean;
    idPeriodoLectivoSeleccionado: number;
    idEstudianteSeleccionado: number;
    estudiantes: EstudianteAsignacionMateria[];
    asignaturasTomadas: Asignatura[];
    asignaturasCarrera: Asignatura[];
    asignaturasTomar: Asignatura[];
    asignaturasTomarRegistradas: Asignatura[];
    idAsignaturaTomarSeleccionada: number;
    idAsignaturaCarreraSeleccionada: number;
    periodosAcademicos: PeriodoAcademico[];
    constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public asignaturaCupoDataService: AsignaturaCupoService, public periodoAcademicoDataService: PeriodoAcademicoService, public asignacionMateriasDataService: AsignacionMateriasService, public carreraDataService: CarreraService, public jornadaDataService: JornadaService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.asignaturasTomar = [];
        this.idCarreraSeleccionada = 0;
        this.idEstudianteSeleccionado = 0;
        this.idPeriodoLectivoSeleccionado = 0;
        this.idJornada = 0;
        this.idAsignaturaCarreraSeleccionada = 0;
        this.idAsignaturaTomarSeleccionada = 0;
        this.filtroListo = false;
        this.estudianteSeleccionadoLista = false;
        this.getCarreras();
        this.getJornadas();
        this.getPeriodoLectivo();
        this.getPeriodoAcademico();
    }

    getEstudiantesCarrera() {
        this.estudiantes = [];
        this.busy = this.asignacionMateriasDataService.getEstudiantesCarrera(this.idCarreraSeleccionada, this.idPeriodoLectivoSeleccionado)
        .then(respuesta => {
            this.estudiantes = respuesta;
        })
        .catch(error => {
        });
    }

    getAsignaturasTomadas() {
        this.asignaturasTomadas = [];
        this.busy = this.asignacionMateriasDataService.getAsignaturasMatricula(this.estudianteAsignacion.idMatricula)
        .then(respuesta => {
            this.asignaturasTomadas = respuesta;
        })
        .catch(error => {
        });
    }

    getCarreras() {
        this.carreras = [];
        this.busy = this.carreraDataService.getAll()
        .then(respuesta => {
            this.carreras = respuesta;
        })
        .catch(error => {
        });
    }

    getAsignaturasCarrera() {
        this.asignaturasCarrera = [];
        this.busy = this.asignacionMateriasDataService.getAsignaturasCarrera(this.idCarreraSeleccionada)
        .then(respuesta => {
            this.asignaturasCarrera = respuesta;
        })
        .catch(error => {
        });
    }

    getPeriodoAcademico() {
        this.periodosAcademicos = [];
        this.busy = this.periodoAcademicoDataService.getAll()
        .then(respuesta => {
            this.periodosAcademicos = respuesta;
        })
        .catch(error => {
        });
    }

    getPeriodoLectivo() {
        this.periodosLectivos = [];
        this.busy = this.asignacionMateriasDataService.getPeriodosLectivos()
        .then(respuesta => {
            this.periodosLectivos = respuesta;
        })
        .catch(error => {
        });
    }

    getAsignaturasTomar() {
        this.asignaturasTomar = [];
        this.busy = this.asignacionMateriasDataService.getAsignaturasTomar(this.estudianteAsignacion.idPersona)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == '[0]' ) {
                return;
            }
            this.asignaturasTomar = respuesta;
            this.asignaturasTomarRegistradas = respuesta;
        })
        .catch(error => {
        });
    }

    getJornadas() {
        this.jornadas = [];
        this.busy = this.jornadaDataService.getAll()
        .then(respuesta => {
            this.jornadas = respuesta;
        })
        .catch(error => {
        });
    }

    filtroSeleccionado() {
        if (this.idCarreraSeleccionada == 0 || this.idPeriodoLectivoSeleccionado == 0) {
            this.filtroListo = false;
            this.idEstudianteSeleccionado = 0;
            this.estudianteSeleccionadoEnLista();
            return;
        }
        this.filtroListo = true;
        this.getEstudiantesCarrera();
        this.getAsignaturasCarrera();
    }

    estudianteSeleccionadoEnLista() {
        if (this.idEstudianteSeleccionado == 0) {
            this.estudianteSeleccionadoLista = false;
            return;
        }
        this.estudianteSeleccionadoLista = true;
        this.getEstudiante(this.idEstudianteSeleccionado);
    }

    getEstudiante(idMatricula: number) {
        this.estudiantes.forEach(estudiante => {
            if (idMatricula == estudiante.idMatricula) {
                this.estudianteAsignacion = estudiante;
                this.estudianteAsignacion.idPeriodoAcademico = 0;
                this.getAsignaturasTomadas();
                this.getAsignaturasTomar();
            }
        });
    }

    agregar() {
        let estaEnLista: Boolean = false;
        this.asignaturasTomar.forEach(asignaturaTomar => {
            if (this.idAsignaturaCarreraSeleccionada == asignaturaTomar.id) {
                estaEnLista = true;
                this.toastr.warning('La asignatura seleccionada ya está en la lista', 'Agregar Asignatura');
            }
        });
        const asignatura = this.getAsignatura(this.idAsignaturaCarreraSeleccionada);
        if (asignatura.id !== 0 && !estaEnLista) {
            this.asignaturasTomar.push(asignatura);
        }
    }

    getAsignatura(idAsignatura) {
        let toReturn = new Asignatura();
        toReturn.id = 0;
        this.asignaturasCarrera.forEach(asignatura => {
            if (asignatura.id == idAsignatura) {
                toReturn = asignatura;
            }
        });
        return toReturn;
    }

    quitar() {
        const asignatura = this.getAsignatura(this.idAsignaturaTomarSeleccionada);
        if (asignatura.id !== 0) {
            const nuevaListaAsignaturasTomar = [];
            this.asignaturasTomar.forEach(asignaturaTomar => {
                if (asignaturaTomar.id !== asignatura.id) {
                    nuevaListaAsignaturasTomar.push(asignaturaTomar)
                }
            });
            this.asignaturasTomar = nuevaListaAsignaturasTomar;
        }
    }

    guardar() {
        if (this.asignaturasTomar.length == 0) {
            return;
        }
        this.busy = this.asignacionMateriasDataService.createCupo(this.estudianteAsignacion.idPersona, this.idCarreraSeleccionada, this.estudianteAsignacion.idJornada, this.estudianteAsignacion.idPeriodoAcademico, this.asignaturasTomar, this.asignaturasTomarRegistradas)
        .then(respuesta => {
            this.toastr.success('Datos guardados satisfactoriamente', 'Asignación de Asignaturas');
            console.log(respuesta);
        })
        .catch(error => {
        });
    }
}
