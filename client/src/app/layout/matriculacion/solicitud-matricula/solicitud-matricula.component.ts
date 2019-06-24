import { LoginResult } from './../../../entidades/especifico/Login-Result';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Persona } from 'app/entidades/CRUD/Persona';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { DatosCupo } from 'app/entidades/especifico/Datos-Cupo';
import { DatosInstituto } from 'app/entidades/especifico/Datos-Instituto';
import { Asignatura } from 'app/entidades/CRUD/Asignatura';
import { PeriodoLectivoActual } from 'app/entidades/especifico/Periodo-Lectivo-Actual';
import { SolicitudMatricula } from 'app/entidades/CRUD/SolicitudMatricula';
import { SolicitudMatriculaService } from 'app/CRUD/solicitudmatricula/solicitudmatricula.service';
import { AsignaturaSolicitudMatricula } from 'app/entidades/CRUD/AsignaturaSolicitudMatricula';
import { AsignaturaSolicitudMatriculaService } from 'app/CRUD/asignaturasolicitudmatricula/asignaturasolicitudmatricula.service';
import { Router } from '@angular/router';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
    selector: 'app-solicitud-matricula',
    templateUrl: './solicitud-matricula.component.html',
    styleUrls: ['./solicitud-matricula.component.scss']
})
export class SolicitudMatriculaComponent implements OnInit {
    @ViewChild('encabezadoSolicitudMatricula') encabezadoSolicitudMatricula: ElementRef;
    @ViewChild('cuerpoSolicitudMatricula') cuerpoSolicitudMatricula: ElementRef;
    @ViewChild('pieSolicitudMatricula') pieSolicitudMatricula: ElementRef;
    busy: Promise<any>;
    personaLogeada: Persona;
    rol: number;
    datosCupo: DatosCupo;
    datosInstituto: DatosInstituto;
    asignaturasMatriculables: Asignatura[];
    periodoLectivoActual: PeriodoLectivoActual;
    logo: String;
    fechaActual: Date;
    barcode: String;
    solicitudMatricula: SolicitudMatricula;
    solicitudEmitida: Boolean;
    rolesSecundarios: RolSecundario[];
    constructor(public toastr: ToastsManager, vcr: ViewContainerRef,
        private matriculacionDataService: MatriculacionService,
        private solicitudMatriculaDataService: SolicitudMatriculaService,
        private asignaturaSolicitudMatriculaDataService: AsignaturaSolicitudMatriculaService,
        private router: Router,
        private rd: Renderer2
        ) {
            this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        const logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.rol = logedResult.idRol;
        this.rolesSecundarios = JSON.parse(localStorage.getItem('rolesSecundarios')) as RolSecundario[];
        let autorizado = false;
        this.rolesSecundarios.forEach(rol => {
            if ( rol.idRol == 2 || rol.idRol == 6 ) {
                autorizado = true;
            }
        });
        if ( this.rol == 2 || this.rol == 6 ) {
            autorizado = true;
        }
        if (!autorizado) {
            this.router.navigate(['/login']);
        }
        this.datosCupo = new DatosCupo();
        this.datosInstituto = new DatosInstituto();
        this.periodoLectivoActual = new PeriodoLectivoActual();
        this.fechaActual = new Date();
        this.solicitudMatricula = new SolicitudMatricula();
        this.getPeriodoLectivoActual();
        this.getDatosCupo(this.personaLogeada.id);
    }

    getAsignaturasMatriculables(identificacion: string): void {
        this.busy = this.matriculacionDataService.getAsignaturasMatriculables(identificacion)
        .then(respuesta => {
            this.asignaturasMatriculables = respuesta;
        })
        .catch(error => {

        });
    }

    getDatosInstituto(idCarrera: number): void {
        this.busy = this.matriculacionDataService.getDatosInstituto(idCarrera)
        .then(respuesta => {
            this.datosInstituto = respuesta;
            this.logo = 'assets/images/logos/' + this.datosInstituto.nombre + '.png';
        })
        .catch(error => {

        });
    }

    getPeriodoLectivoActual(): void {
        this.busy = this.matriculacionDataService.getPeriodoLectivoActual()
        .then(respuesta => {
            this.periodoLectivoActual = respuesta;
        })
        .catch(error => {

        });
    }

    getDatosCupo(idPersona: number): void {
        this.busy = this.matriculacionDataService.getDatosCupo(idPersona)
        .then(respuesta => {
            this.datosCupo = respuesta;
            this.getDatosInstituto(this.datosCupo.idCarrera);
            this.getAsignaturasMatriculables(this.personaLogeada.identificacion);
            const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
            this.barcode = this.fechaActual.getFullYear().toString() + '-' + meses[this.fechaActual.getMonth()] + '-' + this.datosCupo.siglasCarrera + '-' + this.datosCupo.identificacion;
            this.checkSolicitudEmitida(this.barcode.toString());
        })
        .catch(error => {

        });
    }

    imprimir(): void {
        html2canvas(this.encabezadoSolicitudMatricula.nativeElement).then(canvasEncabezado => {
            const encabezadoSolicitudMatriculaImg = canvasEncabezado.toDataURL('image/png');
            html2canvas(this.cuerpoSolicitudMatricula.nativeElement).then(canvasCuerpo => {
                const cuerpoSolicitudMatriculaImg = canvasCuerpo.toDataURL('image/png');
                html2canvas(this.pieSolicitudMatricula.nativeElement).then(canvasPie => {
                    const pieSolicitudMatriculaImg = canvasPie.toDataURL('image/png');
                    const doc = new jsPDF();
                    doc.addImage(encabezadoSolicitudMatriculaImg, 'PNG', 10, 10, 190, 30);
                    doc.addImage(cuerpoSolicitudMatriculaImg, 'PNG', 30, 40, 160, 217);
                    doc.addImage(pieSolicitudMatriculaImg, 'PNG', 10, 257, 190, 30);
                    doc.save('SolicitudMatricula' + this.personaLogeada.identificacion + '.pdf');
                });
            });
        });
    }

    aceptar(): void {
        if ( this.solicitudEmitida === false ) {
            this.solicitudEmitida = true;
            this.solicitudMatricula.id = 0;
            this.solicitudMatricula.codigo = this.barcode.toString();
            this.solicitudMatricula.fecha = this.fechaActual;
            this.solicitudMatricula.idCarrera = this.datosCupo.idCarrera;
            this.solicitudMatricula.idEstadoSolicitud = 1;
            this.solicitudMatricula.idPeriodoLectivo = this.periodoLectivoActual.id;
            this.solicitudMatricula.idPersona = this.personaLogeada.id;
            this.guardar(this.solicitudMatricula);
        }
    }

    guardar(solicitudMatricula: SolicitudMatricula): void {
        this.busy = this.solicitudMatriculaDataService.create(solicitudMatricula)
        .then(respuesta => {
           if ( respuesta ) {
              this.toastr.success('Solicitud de matrícula receptada', 'Matriculación');
              this.leerSolicitudMatriculaCreada(solicitudMatricula.codigo);
           } else {
              this.toastr.warning('Se produjo un error', 'Matriculación');
           }
        })
        .catch(error => {
           this.toastr.warning('Se produjo un error', 'Matriculación');
        });
    }

    leerSolicitudMatriculaCreada(codigoSolicitudMatricula: string) {
        this.busy = this.solicitudMatriculaDataService.getFiltrado( 'codigo', 'coincide', codigoSolicitudMatricula)
        .then(respuesta => {
            const id = respuesta[0].id;
            this.asignaturasMatriculables.forEach(asignatura => {
                const asignaturaSolicitudMatricula = new AsignaturaSolicitudMatricula();
                asignaturaSolicitudMatricula.idAsignatura = asignatura.id;
                asignaturaSolicitudMatricula.idSolicitudMatricula = id;
                this.guardarAsignaturaSolicitudMatricula(asignaturaSolicitudMatricula);
            });
        })
        .catch(error => {

        });
    }

    checkSolicitudEmitida(codigoSolicitudMatricula: string) {
        this.busy = this.solicitudMatriculaDataService.getFiltrado( 'codigo', 'coincide', codigoSolicitudMatricula)
        .then(respuesta => {
            if (JSON.stringify(respuesta) === '[0]') {
                this.solicitudEmitida = false;
            } else {
                this.solicitudEmitida = true;
            }
        })
        .catch(error => {

        });
    }

    guardarAsignaturaSolicitudMatricula(asignaturaSolicitudMatricula: AsignaturaSolicitudMatricula) {
        this.busy = this.asignaturaSolicitudMatriculaDataService.create(asignaturaSolicitudMatricula)
        .then(respuesta => {})
        .catch(error => {});
    }
}
