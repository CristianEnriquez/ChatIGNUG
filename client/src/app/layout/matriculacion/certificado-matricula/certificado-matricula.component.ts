import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginResult } from 'app/entidades/especifico/Login-Result';
import { Persona } from 'app/entidades/CRUD/Persona';
import { DatosCupo } from 'app/entidades/especifico/Datos-Cupo';
import { DatosInstituto } from 'app/entidades/especifico/Datos-Instituto';
import { Asignatura } from 'app/entidades/CRUD/Asignatura';
import { GeneroService } from 'app/CRUD/genero/genero.service';
import { EtniaService } from 'app/CRUD/etnia/etnia.service';
import { TipoIngresosService } from 'app/CRUD/tipoingresos/tipoingresos.service';
import { OcupacionService } from 'app/CRUD/ocupacion/ocupacion.service';
import { TipoDiscapacidadService } from '../../../CRUD/tipodiscapacidad/tipodiscapacidad.service';
import { TipoSangreService } from '../../../CRUD/tiposangre/tiposangre.service';
import { EstadoCivilService } from '../../../CRUD/estadocivil/estadocivil.service';
import { TituloService } from 'app/CRUD/titulo/titulo.service';
import { EstudianteService } from 'app/CRUD/estudiante/estudiante.service';
import { TipoInstitucionProcedenciaService } from 'app/CRUD/tipoinstitucionprocedencia/tipoinstitucionprocedencia.service';
import { NivelTituloService } from '../../../CRUD/niveltitulo/niveltitulo.service';
import { UbicacionService } from '../../../CRUD/ubicacion/ubicacion.service';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { AsignaturaSolicitudMatricula } from 'app/entidades/CRUD/AsignaturaSolicitudMatricula';
import { AsignaturaSolicitudMatriculaService } from 'app/CRUD/asignaturasolicitudmatricula/asignaturasolicitudmatricula.service';
import { PersonaService } from 'app/CRUD/persona/persona.service';
import { AsignaturaService } from 'app/CRUD/asignatura/asignatura.service';
import { getPackedSettings } from 'http2';
import { Carrera } from 'app/entidades/CRUD/Carrera';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { Matricula } from 'app/entidades/CRUD/Matricula';
import { MatriculaService } from 'app/CRUD/matricula/matricula.service';
import { PeriodoLectivoService } from 'app/CRUD/periodolectivo/periodolectivo.service';
import { MatriculaAsignaturaService } from 'app/CRUD/matriculaasignatura/matriculaasignatura.service';
import { PeriodoLectivo } from 'app/entidades/CRUD/PeriodoLectivo';
import { MatriculaAsignatura } from 'app/entidades/CRUD/MatriculaAsignatura';
import { Router } from '@angular/router';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';
import { JornadaService } from 'app/CRUD/jornada/jornada.service';
import { PersonaCombo } from 'app/entidades/especifico/PersonaCombo';
import { forEach } from '@angular/router/src/utils/collection';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';
@Component({
    selector: 'app-certificado-matricula',
    templateUrl: './certificado-matricula.component.html',
    styleUrls: ['./certificado-matricula.component.scss']
})
export class CertificadoMatriculaComponent implements OnInit {
    busy: Promise<any>;
    @ViewChild('encabezadoHojaDatos') encabezadoHojaDatos: ElementRef;
    @ViewChild('cuerpoHojaDatos') cuerpoHojaDatos: ElementRef;
    @ViewChild('pieHojaDatos') pieHojaDatos: ElementRef;
    @ViewChild('encabezadoCertificadoMatricula') encabezadoCertificadoMatricula: ElementRef;
    @ViewChild('cuerpoCertificadoMatricula') cuerpoCertificadoMatricula: ElementRef;
    @ViewChild('pieCertificadoMatricula') pieCertificadoMatricula: ElementRef;
    personaLogeada: Persona;
    rol: number;
    datosInstituto: DatosInstituto;
    asignaturasMatricula: Asignatura[] = [];
    logo: String;
    fechaCertificado: Date;
    nivel: String;
    barcode: String;
    certificadoMatriculaSeleccionada: Matricula;
    genero: string;
    estadoCivil: string;
    etnia: string;
    tipoSangre: string;
    ingresos: string;
    ocupacion: string;
    tipoDiscapacidad: string;
    paisDomicilio: string;
    provinciaDomicilio: string;
    cantonDomicilio: string;
    parroquiaDomicilio: string;
    paisNacimiento: string;
    provinciaNacimiento: string;
    cantonNacimiento: string;
    parroquiaNacimiento: string;
    paisOrigenPadre: string;
    nivelEstudioPadre: string;
    paisOrigenMadre: string;
    nivelEstudioMadre: string;
    idTipoInstitucionProcedencia: number;
    tipoInstitucionProcedencia: string;
    tituloBachiller: string;
    notaPostulacion: number;
    certificadosMatriculas: Matricula[] = [];
    certificadosMatriculasPaginaVisible: Matricula[] = [];
    estudiante: Persona;
    seleccionado: Boolean;
    paginaActual: number;
    paginaUltima: number;
    carreraSeleccionadaCombo: number;
    estudianteSeleccionadoCombo: number;
    carreras: Carrera[];
    numeroMatricula: String;
    numeroFolio: String;
    periodoLectivo: PeriodoLectivo;
    rolesSecundarios: RolSecundario[];
    datosCupo: DatosCupo;
    personasMatriculadas: PersonaCombo[] = [];
    personasMostradas: PersonaCombo[] = [];
    periodosLectivos: PeriodoLectivo[] = [];
    periodoLectivoSeleccionado: number;
    srcFoto: string;
    fotoType: string;
    fotoNombre: string;
    fotoFile: string;

    constructor(
        private periodoLectivoDataService: PeriodoLectivoService,
        private matriculaDataService: MatriculaService,
        private matriculaAsignaturaDataService: MatriculaAsignaturaService,
        public toastr: ToastsManager, vcr: ViewContainerRef,
        private personaDataService: PersonaService,
        private matriculacionDataService: MatriculacionService,
        private asignaturaMatriculaDataService: MatriculaAsignaturaService,
        private generoDataService: GeneroService,
        private estadoCivilDataService: EstadoCivilService,
        private etniaDataService: EtniaService,
        private tipoSangreDataService: TipoSangreService,
        private ingresosDataService: TipoIngresosService,
        private ocupacionDataService: OcupacionService,
        private tipoDiscapacidadDataService: TipoDiscapacidadService,
        private ubicacionDataService: UbicacionService,
        private nivelTituloDataService: NivelTituloService,
        private estudianteDataService: EstudianteService,
        private tipoInstitucionProcedenciaService: TipoInstitucionProcedenciaService,
        private asignaturaDataService: AsignaturaService,
        private carreraDataService: CarreraService,
        private router: Router,
        private rd: Renderer2,
        private fotoPerfilDataService: FotoPerfilService,
        private jornadaDataService: JornadaService) {
            this.toastr.setRootViewContainerRef(vcr);
    }

    getFotoPerfil() {
        this.srcFoto = 'assets/images/user.png';
        this.busy = this.fotoPerfilDataService.getFiltrado('idPersona', 'coincide' , this.certificadoMatriculaSeleccionada.idPersona.toString())
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == '[0]' ) {
                return;
            }
            this.fotoFile = respuesta[0].adjunto;
            this.fotoNombre = respuesta[0].nombreArchivo;
            this.fotoType = respuesta[0].tipoArchivo;
            this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
        })
        .catch(error => {
        });
    }

    actualizar() {
        this.estudiante = new Persona();
        this.datosInstituto = new DatosInstituto();
        this.certificadoMatriculaSeleccionada = null;
        this.seleccionado = false;
        this.filtroSeleccionado();
        this.getCertificadosMatriculas();
        this.estudiante = new Persona();
        this.datosInstituto = new DatosInstituto();
        this.certificadoMatriculaSeleccionada = null;
        this.seleccionado = false;
        this.periodoLectivo = new PeriodoLectivo();
        this.paginaActual = 1;
        this.getEstudiantesMatriculados();
        this.getCarreras();
        this.getPeriodosLectivos();
        this.filtroSeleccionado();
        this.getCuentaPaginas();
    }

    ngOnInit() {
        const logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.rol = logedResult.idRol;
        this.rolesSecundarios = JSON.parse(localStorage.getItem('rolesSecundarios')) as RolSecundario[];
        let autorizado = false;
        this.srcFoto = 'assets/images/user.png';
        this.rolesSecundarios.forEach(rol => {
            if ( rol.idRol == 5 ) {
                autorizado = true;
            }
        });
        if ( this.rol == 5 ) {
            autorizado = true;
        }
        if (!autorizado) {
            this.router.navigate(['/login']);
        }
        this.estudianteSeleccionadoCombo = 0;
        this.periodoLectivoSeleccionado = 0;
        this.carreraSeleccionadaCombo = 0;
        this.actualizar();
    }

    getCuentaPaginas() {
        this.busy = this.matriculacionDataService.getPaginasMatriculaFiltrado(this.estudianteSeleccionadoCombo, this.carreraSeleccionadaCombo, this.periodoLectivoSeleccionado, 5)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.paginaUltima = respuesta;
        })
        .catch(error => {

        });
    }

    getPeriodosLectivos() {
        this.busy = this.periodoLectivoDataService.getAll()
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.periodosLectivos = respuesta;
        })
        .catch(error => {

        });
    }

    getPeriodoLectivo(id: number): void {
        this.busy = this.periodoLectivoDataService.get(id)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.periodoLectivo = respuesta;
        })
        .catch(error => {

        });
    }

    filtroSeleccionado() {
        this.certificadoMatriculaSeleccionada = null;
        this.paginaActual = 1;
        this.getCertificadosMatriculas();
        this.getEstudiantesMatriculados();
        this.getCuentaPaginas();
    }

    getCarreras() {
        this.busy = this.carreraDataService.getAll()
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.carreras = respuesta;
        })
        .catch(error => {

        });
    }

    getEstudiantesMatriculados(): void {
        this.personasMostradas = [];
        this.personasMatriculadas = [];
        this.busy = this.matriculacionDataService.getPersonasMatriculadas(this.carreraSeleccionadaCombo, this.periodoLectivoSeleccionado, 4)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.personasMatriculadas = respuesta;
            this.personasMostradas = respuesta;
        })
        .catch(error => {

        });
    }

    getPaginaPrimera() {
        if ( this.paginaActual > 1 ) {
            this.paginaActual = 1;
            this.getPagina(this.paginaActual);
        }
    }

    getPagina(pagina: number) {
        this.seleccionado = false;
        this.getCertificadosMatriculas();
    }

    getPaginaAnterior() {
        if ( this.paginaActual > 1) {
            this.paginaActual = this.paginaActual - 1;
            this.getPagina(this.paginaActual);
        }
    }

    getPaginaSiguiente() {
        if ( this.paginaActual < this.paginaUltima) {
            this.paginaActual = this.paginaActual + 1;
            this.getPagina(this.paginaActual);
        }
    }

    getPaginaUltima() {
        if ( this.paginaActual < this.paginaUltima ) {
            this.paginaActual = this.paginaUltima;
            this.getPagina(this.paginaActual);
        }
    }

    onSelect(entidadActual: Matricula): void {
        this.certificadoMatriculaSeleccionada = entidadActual;
        this.getPersona(this.certificadoMatriculaSeleccionada.idPersona);
        this.getPeriodoLectivo(this.certificadoMatriculaSeleccionada.idPeriodoLectivo);
        this.fechaCertificado = entidadActual.fecha;
        this.seleccionado = true;
    }

    estaSeleccionado(porVerificar): boolean {
        if (this.certificadoMatriculaSeleccionada == null) {
        return false;
        }
        return porVerificar.id === this.certificadoMatriculaSeleccionada.id;
    }

    getCertificadosMatriculas(): void {
        this.certificadosMatriculasPaginaVisible = [];
        this.busy = this.matriculacionDataService.getMatriculaFiltrado(this.estudianteSeleccionadoCombo, this.carreraSeleccionadaCombo, this.periodoLectivoSeleccionado, this.paginaActual, 5)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.certificadosMatriculasPaginaVisible = respuesta;
        })
        .catch(error => {

        });
    }

    getPersona(idPersona: number): void {
        this.busy = this.personaDataService.get(idPersona)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.estudiante = respuesta;
            this.getHojaDatos(this.estudiante);
            this.getDatosCupo(this.estudiante.id);
            this.getFotoPerfil();
        })
        .catch(error => {

        });
    }

    getHojaDatos(aspirate: Persona): void {
        this.busy = this.generoDataService.getFiltrado('id', 'coincide', aspirate.idGenero.toString())
        .then(respuesta => {
            this.genero = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.estadoCivilDataService.getFiltrado('id', 'coincide', aspirate.idEstadoCivil.toString())
        .then(respuesta => {
            this.estadoCivil = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.etniaDataService.getFiltrado('id', 'coincide', aspirate.idEtnia.toString())
        .then(respuesta => {
            this.etnia = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.tipoSangreDataService.getFiltrado('id', 'coincide', aspirate.idTipoSangre.toString())
        .then(respuesta => {
            this.tipoSangre = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ingresosDataService.getFiltrado('id', 'coincide', aspirate.idIngresos.toString())
        .then(respuesta => {
            this.ingresos = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ocupacionDataService.getFiltrado('id', 'coincide', aspirate.idOcupacion.toString())
        .then(respuesta => {
            this.ocupacion = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        if(aspirate.idTipoDiscapacidad!=null){
            this.busy = this.tipoDiscapacidadDataService.getFiltrado('id', 'coincide', aspirate.idTipoDiscapacidad.toString())
            .then(respuesta => {
                this.tipoDiscapacidad = respuesta[0].descripcion;
            })
            .catch(error => {

            });
        }
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionDomicilioPais.toString())
        .then(respuesta => {
            this.paisDomicilio = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionDomicilioProvincia.toString())
        .then(respuesta => {
            this.provinciaDomicilio = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionDomicilioCanton.toString())
        .then(respuesta => {
            this.cantonDomicilio = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionDomicilioParroquia.toString())
        .then(respuesta => {
            this.parroquiaDomicilio = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionNacimientoPais.toString())
        .then(respuesta => {
            this.paisNacimiento = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionNacimientoProvincia.toString())
        .then(respuesta => {
            this.provinciaNacimiento = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionNacimientoCanton.toString())
        .then(respuesta => {
            this.cantonNacimiento = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.idUbicacionNacimientoParroquia.toString())
        .then(respuesta => {
            this.parroquiaNacimiento = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.paisOrigenPadre.toString())
        .then(respuesta => {
            this.paisOrigenPadre = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.ubicacionDataService.getFiltrado('codigo', 'coincide', aspirate.paisOrigenMadre.toString())
        .then(respuesta => {
            this.paisOrigenMadre = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.nivelTituloDataService.getFiltrado('id', 'coincide', aspirate.idNivelEstudioPadre.toString())
        .then(respuesta => {
            this.nivelEstudioPadre = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.nivelTituloDataService.getFiltrado('id', 'coincide', aspirate.idNivelEstudioMadre.toString())
        .then(respuesta => {
            this.nivelEstudioMadre = respuesta[0].descripcion;
        })
        .catch(error => {

        });
        this.busy = this.estudianteDataService.getFiltrado('idPersona', 'coincide', aspirate.id.toString())
        .then(respuesta => {
            this.idTipoInstitucionProcedencia = respuesta[0].idTipoInstitucionProcedencia;
            this.tituloBachiller = respuesta[0].tituloBachiller;
            this.notaPostulacion = respuesta[0].notaPostulacion;
            this.busy = this.tipoInstitucionProcedenciaService.getFiltrado('id', 'coincide', this.idTipoInstitucionProcedencia.toString())
            .then(respuesta => {
                this.tipoInstitucionProcedencia = respuesta[0].descripcion;
            })
            .catch(error => {

            });
        })
        .catch(error => {
            // ERROR
        });
    }

    getAsignaturasMatricula(idMatricula: number): void {
        this.busy = this.asignaturaMatriculaDataService.getFiltrado('idMatricula', 'coincide', idMatricula.toString())
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            respuesta.forEach(asignaturaMatricula => {
                this.getAsignatura(asignaturaMatricula.idAsignatura);
            });
        })
        .catch(error => {

        });
    }

    getAsignatura(id: number): void {
        let menorNivel = 10;
        const nivelToExport = ['PRIMER NIVEL', 'SEGUNDO NIVEL', 'TERCER NIVEL', 'CUARTO NIVEL', 'QUINTO NIVEL', 'SEXTO NIVEL'];
        this.busy = this.asignaturaDataService.get(id)
        .then(respuesta => {
            if (menorNivel > respuesta.idPeriodoAcademico) {
                menorNivel = respuesta.idPeriodoAcademico - 1;
            }
            this.asignaturasMatricula.push(respuesta);
            this.nivel = nivelToExport[menorNivel];
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

    getDatosCupo(idPersona: number): void {
        this.datosCupo = new DatosCupo();
        this.barcode = this.certificadoMatriculaSeleccionada.codigo;
        this.numeroFolio = this.certificadoMatriculaSeleccionada.folio;
        this.numeroMatricula = this.certificadoMatriculaSeleccionada.numeroMatricula;
        this.datosCupo.idCarrera = this.certificadoMatriculaSeleccionada.idCarrera;
        this.getDatosInstituto(this.datosCupo.idCarrera);
        this.asignaturasMatricula = [];
        this.getAsignaturasMatricula(this.certificadoMatriculaSeleccionada.id);
        this.datosCupo.identificacion = this.estudiante.identificacion;
        this.datosCupo.idJornada = this.certificadoMatriculaSeleccionada.idJornada;
        this.datosCupo.nombreCompleto = this.estudiante.nombre1 + ' ' + this.estudiante.nombre2 + ' ' + this.estudiante.apellido1 + ' ' + this.estudiante.apellido2;
        this.getDatosCarrera(this.certificadoMatriculaSeleccionada.idCarrera);
        this.getDatosJornada(this.datosCupo.idJornada);
    }

    getDatosJornada(idJornada: number): void {
        this.busy = this.jornadaDataService.get(idJornada)
        .then(respuesta => {
            this.datosCupo.jornada = respuesta.descripcion;
        })
        .catch(error => {

        });
    }

    getDatosCarrera(idCarrera: number): void {
        this.busy = this.carreraDataService.get(idCarrera)
        .then(respuesta => {
           this.datosCupo.carrera = respuesta.nombre;
        })
        .catch(error => {

        });
    }

    imprimirCertificado(): void {
        html2canvas(this.encabezadoCertificadoMatricula.nativeElement).then(canvasEncabezado => {
            const encabezadoCertificadoMatriculaImg = canvasEncabezado.toDataURL('image/png');
            html2canvas(this.cuerpoCertificadoMatricula.nativeElement).then(canvasCuerpo => {
                const cuerpoCertificadoMatriculaImg = canvasCuerpo.toDataURL('image/png');
                html2canvas(this.pieCertificadoMatricula.nativeElement).then(canvasPie => {
                    const pieCertificadoMatriculaImg = canvasPie.toDataURL('image/png');
                    const doc = new jsPDF();
                    doc.addImage(encabezadoCertificadoMatriculaImg, 'PNG', 10, 10, 190, 30);
                    doc.addImage(cuerpoCertificadoMatriculaImg, 'PNG', 30, 40, 160, 217);
                    doc.addImage(pieCertificadoMatriculaImg, 'PNG', 10, 257, 190, 30);
                    doc.save('CertificadoMatricula' + this.certificadoMatriculaSeleccionada.codigo + '.pdf');
                });
            });
        });
    }

    imprimirHojaDatos(): void {
        html2canvas(this.encabezadoHojaDatos.nativeElement).then(canvasEncabezado => {
            const encabezadoHojaDatosImg = canvasEncabezado.toDataURL('image/png');
            html2canvas(this.cuerpoHojaDatos.nativeElement).then(canvasCuerpo => {
                const cuerpoHojaDatosImg = canvasCuerpo.toDataURL('image/png');
                html2canvas(this.pieHojaDatos.nativeElement).then(canvasPie => {
                    const pieHojaDatosImg = canvasPie.toDataURL('image/png');
                    const doc = new jsPDF();
                    doc.addImage(encabezadoHojaDatosImg, 'PNG', 10, 10, 190, 30);
                    doc.addImage(cuerpoHojaDatosImg, 'PNG', 30, 40, 160, 217);
                    doc.addImage(pieHojaDatosImg, 'PNG', 10, 257, 190, 30);
                    doc.save('HojaDatos' + this.certificadoMatriculaSeleccionada.codigo + '.pdf');
                });
            });
        });
    }
}
