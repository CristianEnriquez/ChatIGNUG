import { LoginResult } from 'app/entidades/especifico/Login-Result';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


import { AsignaturaDocenteAsistenciaEstudiante } from 'app/entidades/especifico/Asignatura-Docente-Asistencia-Estudiante';
import { RegistroAsistenciaEstudiante } from 'app/entidades/especifico/Registro-Asistencia-Estudiante';
import { AsistenciaEstudianteService } from '../asistencia-estudiante.service';
import { Persona } from 'app/entidades/CRUD/Persona';
import { AsignaturaDocente } from 'app/entidades/especifico/Asignatura-Docente';
import { PeriodoLectivoActual } from 'app/entidades/especifico/Periodo-Lectivo-Actual';
import { Router } from '@angular/router';
import { PeriodoLectivo } from 'app/entidades/CRUD/PeriodoLectivo';
import { TotalHorasDia } from 'app/entidades/especifico/Total-Horas-Dia';
import { GuardarAsistenciaEstudiante } from 'app/entidades/especifico/Guardar-Asistencia-Estudiante';
import { ActualizarAsistenciaEstudiante } from 'app/entidades/especifico/Actualizar-Asistencia-Estudiante';
@Component({
    selector: 'app-registro-asistencia',
    templateUrl: './registro-asistencia.component.html',
    styleUrls: ['./registro-asistencia.component.scss']
})
export class RegistroAsistenciaComponent implements OnInit {
    busy: Promise<any>;
    personaLogeada: Persona;
    rol: number;
    asignaturasDocente: AsignaturaDocenteAsistenciaEstudiante[];
    periodoLectivo: PeriodoLectivoActual;
    registroAsistencia: RegistroAsistenciaEstudiante[];
    registroAsistenciaCopia: RegistroAsistenciaEstudiante[];
    guardarAsistenciaDia: GuardarAsistenciaEstudiante[];
    actualizarAsistencia: ActualizarAsistenciaEstudiante[];
    asignaturaSeleccionada: number;
    fechaRegistroAsistencia: string;
    totalRegistros: number;
    paginaActual: number;
    paginaUltima: number;
    registrosPorPagina: number;
    registroInicio: number;
    registroFin: number;
    totalHorasDia: TotalHorasDia;
    fechaMinima: string;
    fechaMaxima: string
    fechaCalculo: Date;
    mes: string;
    dia: string;
    segundosMin: number;
    verGuardar: boolean;
    verActualizar: boolean;
    verImprimir: boolean;
    confirmaAccion: boolean;

    constructor(public toastr: ToastsManager, vcr: ViewContainerRef,
        private asistenciaEstudianteDataService: AsistenciaEstudianteService, public router: Router) {
            this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.verGuardar = false;
        this.verActualizar = false;
        this.verImprimir = false;
        this. fechaCalculo = new Date();
        if ((this.fechaCalculo.getMonth() + 1) < 10) {
            this.mes = '0' + (this.fechaCalculo.getMonth() + 1);
        } else {
            this.mes = (this.fechaCalculo.getMonth() + 1).toString();
        }
        if (this.fechaCalculo.getDate() < 10) {
            this.dia = '0' + this.fechaCalculo.getDate();
        } else {
            this.dia = (this.fechaCalculo.getDate()).toString();
        }
        this.fechaMaxima = this.fechaCalculo.getFullYear() + '-' + this.mes + '-' + this.dia;
        this.fechaRegistroAsistencia = this.fechaMaxima;
        const logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.rol = logedResult.idRol;
        if (this.rol === 3) {
            this.paginaActual = 1;
            this.paginaUltima = 1;
            this.registrosPorPagina = 10;
            this.getPeriodoLectivoActual();
        } else {
            this.router.navigate(['/login']);
        }
    }

    getAsignaturasAsistencias(idPersona: number, idPeriodo: number) {
        this.busy = this.asistenciaEstudianteDataService.getAsignaturaDocenteAsistenciaEstudiante(idPersona, idPeriodo)
        .then(respuesta => {
            this.asignaturasDocente = respuesta;
        })
        .catch(error => {

        });
    }

    getPeriodoLectivoActual() {
        this.busy = this.asistenciaEstudianteDataService.getPeriodoLectivoActual()
        .then(respuesta => {
            this.periodoLectivo = respuesta;
            this.fechaCalculo = new Date(this.periodoLectivo.fechaInicio);
            const segundos = this.fechaCalculo.setSeconds(3 * 86400);
            const fechaNueva = new Date(segundos);
            const fechaHoy = new Date(this.fechaMaxima);
            if (fechaNueva > fechaHoy) {
                if ((this.fechaCalculo.getMonth() + 1) < 10) {
                    this.mes = '0' + (this.fechaCalculo.getMonth() + 1);
                } else {
                    this.mes = (this.fechaCalculo.getMonth() + 1).toString();
                }
                if (this.fechaCalculo.getDate() < 10) {
                    this.dia = '0' + this.fechaCalculo.getDate();
                } else {
                    this.dia = (this.fechaCalculo.getDate()).toString();
                }
                this.fechaMinima = this.fechaCalculo.getFullYear() + '-' + this.mes + '-' + this.dia;
            } else {
                this. fechaCalculo = new Date();
                if (this.fechaCalculo.getDay() === 1) {
                    this.segundosMin = this.fechaCalculo.setSeconds(-5 * 86400); //cambiar -5 y -3 por variables
                } else {
                    this.segundosMin = this.fechaCalculo.setSeconds(-3 * 86400);
                }
                this. fechaCalculo = new Date(this.segundosMin);
                if ((this.fechaCalculo.getMonth() + 1) < 10) {
                    this.mes = '0' + (this.fechaCalculo.getMonth() + 1);
                } else {
                    this.mes = (this.fechaCalculo.getMonth() + 1).toString();
                }
                if (this.fechaCalculo.getDate() < 10) {
                    this.dia = '0' + this.fechaCalculo.getDate();
                } else {
                    this.dia = (this.fechaCalculo.getDate()).toString();
                }
                this.fechaMinima = this.fechaCalculo.getFullYear() + '-' + this.mes + '-' + this.dia;
            }
            this.getAsignaturasAsistencias(this.personaLogeada.id, this.periodoLectivo.id);
        })
        .catch(error => {

        });
    }

    getTotalHorasDia() {
        this.busy = this.asistenciaEstudianteDataService.getTotalHorasDia(
            this.asignaturasDocente[this.asignaturaSeleccionada].idDocenteAsignatura, this.fechaRegistroAsistencia)
        .then(respuesta => {
            this.totalHorasDia = respuesta;
            if (this.totalHorasDia.horas === null) {
                this.totalHorasDia.horas = 0;
            }
            this.getRegistroAsitenciaEstudiante();
        })
        .catch(error => {

        });
    }

    getRegistroAsitenciaEstudiante() {
        this.busy = this.asistenciaEstudianteDataService.getRegistroAsitenciaEstudiante
        (this.asignaturasDocente[this.asignaturaSeleccionada].idAsignatura, this.periodoLectivo.id,
            this.asignaturasDocente[this.asignaturaSeleccionada].idParalelo, this.fechaRegistroAsistencia, this.totalHorasDia.horas)
        .then(respuesta => {
            this.registroAsistencia = respuesta;
            if (this.registroAsistencia[0].idAsistencia == null) {
                this.verGuardar = true;
                this.verActualizar = false;
            } else {
                this.verGuardar = false;
                this.verActualizar = true;
            }
            this.totalRegistros = this.registroAsistencia.length;
            this.paginaUltima = Math.trunc(this.totalRegistros / this.registrosPorPagina);
            if (this.paginaUltima > 0) {
                const resto = this.totalRegistros % this.registrosPorPagina;
                if (resto > 0) {
                    this.paginaUltima = this.paginaUltima + 1;
                }
            } else {
                this.paginaUltima = 1;
            }
            this.getPaginaPrimera();
        })
        .catch(error => {

        });
    }

    getPaginaPrimera() {
        this.paginaActual = 1;
        this.registroInicio = 0;
        this.registroFin = this.registrosPorPagina;
    }

    getPaginaAnterior() {
        if (this.paginaActual > 1) {
            this.paginaActual = this.paginaActual - 1;
            this.registroFin = this.paginaActual * this.registrosPorPagina;
            this.registroInicio = this.registroFin - this.registrosPorPagina;
        }
    }

    getPaginaSiguiente() {
        if (this.paginaActual < this.paginaUltima) {
            this.paginaActual = this.paginaActual + 1;
            this.registroFin = this.paginaActual * this.registrosPorPagina;
            this.registroInicio = this.registroFin - this.registrosPorPagina;
        }
    }

    getPaginaUltima() {
        this.paginaActual = this.paginaUltima;
        this.registroFin = this.totalRegistros;
        this.registroInicio = (this.paginaActual * this.registrosPorPagina) - this.registrosPorPagina;
    }

    crear() {
        this.verGuardar = false;
        this.guardarAsistenciaDia = [];
        for (let i = 0;  i < this.registroAsistencia.length; i++) {
            this.guardarAsistenciaDia.push (
                {
                    'id': 0,
                    'idMatriculaAsignatura': this.registroAsistencia[i].idMatriculaAsignatura,
                    'fecha': this.registroAsistencia[i].fecha,
                    'horas': this.registroAsistencia[i].horas
                }
            );
        }
        this.busy = this.asistenciaEstudianteDataService.create(this.guardarAsistenciaDia)
        .then(respuesta => {
            this.confirmaAccion = respuesta;
            if (this.confirmaAccion) {
                this.toastr.success('Los registros fueron guardaron', 'Guardar Ok');
                this.getRegistroAsitenciaEstudiante();
            } else {
                this.toastr.warning('Se produjo un error', 'Guardar NO Ok');
                this.borrar();
            }
        })
        .catch(error => {
            this.toastr.warning('Se produjo un error', 'Guardar NO Ok');
            this.borrar();
        });
    }

    actualizar() {
        this.verActualizar = false;
        this.guardarAsistenciaDia = [];
        for (let i = 0;  i < this.registroAsistencia.length; i++) {
            if (this.registroAsistencia[i].horas !== this.registroAsistenciaCopia[i].horas) {
                this.guardarAsistenciaDia.push (
                    {
                        'id': 0,
                        'idMatriculaAsignatura': this.registroAsistencia[i].idMatriculaAsignatura,
                        'fecha': this.registroAsistencia[i].fecha,
                        'horas': this.registroAsistencia[i].horas
                    }
                );
            }
        }
        this.busy = this.asistenciaEstudianteDataService.create(this.guardarAsistenciaDia)
        .then(respuesta => {
            this.confirmaAccion = respuesta;
           
        })
        .catch(error => {
           
        });
    }

    borrar() {

    }

    imprimir() {}
}
