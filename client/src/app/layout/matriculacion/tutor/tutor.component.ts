import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginResult } from 'app/entidades/especifico/Login-Result';
import { Persona } from 'app/entidades/CRUD/Persona';
import { DatosCupo } from 'app/entidades/especifico/Datos-Cupo';
import { DatosInstituto } from 'app/entidades/especifico/Datos-Instituto';
import { Asignatura } from 'app/entidades/CRUD/Asignatura';
import { PeriodoLectivoActual } from 'app/entidades/especifico/Periodo-Lectivo-Actual';
import { SolicitudMatricula } from 'app/entidades/CRUD/SolicitudMatricula';
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
import { SolicitudMatriculaService } from 'app/CRUD/solicitudmatricula/solicitudmatricula.service';
import { AsignaturaSolicitudMatricula } from 'app/entidades/CRUD/AsignaturaSolicitudMatricula';
import { AsignaturaSolicitudMatriculaService } from 'app/CRUD/asignaturasolicitudmatricula/asignaturasolicitudmatricula.service';
import { PersonaService } from 'app/CRUD/persona/persona.service';
import { AsignaturaService } from 'app/CRUD/asignatura/asignatura.service';
import { getPackedSettings } from 'http2';
import { Carrera } from 'app/entidades/CRUD/Carrera';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { Router } from '@angular/router';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';
import { PersonaCombo } from 'app/entidades/especifico/PersonaCombo';
import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';
@Component({
    selector: 'app-tutor',
    templateUrl: './tutor.component.html',
    styleUrls: ['./tutor.component.scss']
})
export class TutorComponent implements OnInit {
    busy: Promise<any>;
    personaLogeada: Persona;
    rol: number;
    datosCupo: DatosCupo;
    datosInstituto: DatosInstituto;
    asignaturasMatriculables: Asignatura[] = [];
    periodoLectivoActual: PeriodoLectivoActual;
    logo: String;
    fechaActual: Date;
    barcode: String;
    solicitudMatriculaSeleccionada: SolicitudMatricula;
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
    solicitudesMatriculas: SolicitudMatricula[] = [];
    solicitudesMatriculasPaginaVisible: SolicitudMatricula[] = [];
    aspirante: Persona;
    seleccionado: Boolean;
    paginaActual: number;
    paginaUltima: number;
    carreraSeleccionadaCombo: number;
    carreras: Carrera[];
    rolesSecundarios: RolSecundario[] = [];
    personasPosibles: PersonaCombo[] = [];
    personasMostradas: PersonaCombo[] = [];
    estudianteSeleccionadoCombo: number;
    srcFoto: string;
    fotoType: string;
    fotoNombre: string;
    fotoFile: string;

    constructor(
        public toastr: ToastsManager, vcr: ViewContainerRef,
        private personaDataService: PersonaService,
        private matriculacionDataService: MatriculacionService,
        private solicitudMatriculaDataService: SolicitudMatriculaService,
        private asignaturaSolicitudMatriculaDataService: AsignaturaSolicitudMatriculaService,
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
        private fotoPerfilDataService: FotoPerfilService,
        private router: Router) {
            this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        const logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.rol = logedResult.idRol;
        this.rolesSecundarios = JSON.parse(localStorage.getItem('rolesSecundarios')) as RolSecundario[];
        let autorizado = false;
        this.srcFoto = 'assets/images/user.png';
        this.rolesSecundarios.forEach(rol => {
            if ( rol.idRol == 4 ) {
                autorizado = true;
            }
        });
        if ( this.rol == 4 ) {
            autorizado = true;
        }
        if (!autorizado) {
            this.router.navigate(['/login']);
        }
        this.aspirante = new Persona();
        this.datosCupo = new DatosCupo();
        this.datosInstituto = new DatosInstituto();
        this.periodoLectivoActual = new PeriodoLectivoActual();
        this.fechaActual = new Date();
        this.solicitudMatriculaSeleccionada = new SolicitudMatricula();
        this.seleccionado = false;
        this.carreraSeleccionadaCombo = 0;
        this.getSolicitudesMatriculas(0);
        this.getPeriodoLectivoActual();
        this.getCarreras();
    }


    filtroPersonaSeleccionado(): void {
        this.solicitudesMatriculasPaginaVisible = [];
        this.solicitudesMatriculas.forEach(solicitudMatricula => {
            if ( solicitudMatricula.idPersona == this.estudianteSeleccionadoCombo ) {
                this.solicitudesMatriculasPaginaVisible.push(solicitudMatricula);
            }
        });
        this.paginaActual = 1;
        this.paginaUltima = 1;
    }

    carreraSeleccionada() {
        this.solicitudMatriculaSeleccionada = null;
        this.getSolicitudesMatriculas(this.carreraSeleccionadaCombo);
    }

    getCarreras() {
        this.busy = this.carreraDataService.getAll()
        .then(respuesta => {
            this.carreras = respuesta;
        })
        .catch(error => {

        });
    }

    actualizar() {
        this.aspirante = new Persona();
        this.datosCupo = new DatosCupo();
        this.datosInstituto = new DatosInstituto();
        this.periodoLectivoActual = new PeriodoLectivoActual();
        this.fechaActual = new Date();
        this.solicitudMatriculaSeleccionada = new SolicitudMatricula();
        this.seleccionado = false;
        this.getSolicitudesMatriculas(this.carreraSeleccionadaCombo);
        this.getPeriodoLectivoActual();
        this.getEstudiantesSolicitaron();
    }

    getPaginaPrimera() {
        if ( this.estudianteSeleccionadoCombo == 0 ) {
            this.seleccionado = false;
            this.solicitudesMatriculasPaginaVisible = [];
            for ( let i = 0; i < 5; i++ ) {
                if ( i < this.solicitudesMatriculas.length ) {
                    this.solicitudesMatriculasPaginaVisible.push(this.solicitudesMatriculas[i]);
                }
            }
            this.paginaActual = 1;
            if ( Math.round( this.solicitudesMatriculas.length / 5 ) < this.solicitudesMatriculas.length / 5 ) {
                this.paginaUltima = Math.round( this.solicitudesMatriculas.length / 5 ) + 1;
            } else {
                this.paginaUltima = Math.round( this.solicitudesMatriculas.length / 5 );
            }
            if ( this.paginaUltima == 0 ) {
                this.paginaUltima = 1;
            }
        }
    }

    getPagina(pagina: number) {
        this.seleccionado = false;
        this.solicitudesMatriculasPaginaVisible = [];
        const inicial = (pagina - 1) * 5;
        for ( let i = 0; i < 5; i++ ) {
            if ( inicial + i < this.solicitudesMatriculas.length ) {
                this.solicitudesMatriculasPaginaVisible.push(this.solicitudesMatriculas[inicial + i]);
            }
        }
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
        if ( this.estudianteSeleccionadoCombo == 0 ) {
           this.paginaActual = this.paginaUltima;
           this.getPagina(this.paginaActual);
        }
    }

    onSelect(entidadActual: SolicitudMatricula): void {
        this.solicitudMatriculaSeleccionada = entidadActual;
        this.getPersona(this.solicitudMatriculaSeleccionada.idPersona);
        this.seleccionado = true;
    }

    estaSeleccionado(porVerificar): boolean {
        if (this.solicitudMatriculaSeleccionada == null) {
        return false;
        }
        return porVerificar.id === this.solicitudMatriculaSeleccionada.id;
    }

    getFotoPerfil() {
        this.srcFoto = 'assets/images/user.png';
        this.busy = this.fotoPerfilDataService.getFiltrado('idPersona', 'coincide' , this.solicitudMatriculaSeleccionada.idPersona.toString())
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

    getSolicitudesMatriculas(idCarrera: number): void {
        this.busy = this.solicitudMatriculaDataService.getFiltrado('idEstadoSolicitud', 'coincide', '1')
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            if ( idCarrera == 0) {
                this.solicitudesMatriculas = respuesta;
                this.estudianteSeleccionadoCombo = 0;
                this.getEstudiantesSolicitaron();
                this.getPaginaPrimera();
            } else {
                this.solicitudesMatriculas = [];
                respuesta.forEach(element => {
                    if ( element.idCarrera == idCarrera ) {
                        this.solicitudesMatriculas.push(element);
                        this.personasPosibles.forEach(personaMatriculada => {
                            if ( element.idPersona == personaMatriculada.idPersona ) {
                                this.personasMostradas.push(personaMatriculada);
                            }
                        });
                    }
                });
                this.estudianteSeleccionadoCombo = 0;
                this.personasMostradas.sort((a, b) => {
                    if ( a.nombreCompleto > b.nombreCompleto) {
                        return 1;
                    }
                    if ( a.nombreCompleto < b.nombreCompleto) {
                        return -1;
                    }
                    return 0;
                });
                this.getPaginaPrimera();
            }
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
            this.aspirante = respuesta;
            this.getHojaDatos(this.aspirante);
            this.getDatosCupo(this.aspirante.id);
            this.getFotoPerfil();
        })
        .catch(error => {

        });
    }

    getEstudiantesSolicitaron(): void {
        this.busy = this.matriculacionDataService.getPersonasSolicitudMatricula()
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.personasPosibles = respuesta;
            this.personasMostradas = respuesta;
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

    getAsignaturasMatriculables(idSolicitudMatricula: number): void {
        this.busy = this.asignaturaSolicitudMatriculaDataService.getFiltrado('idSolicitudMatricula', 'coincide', idSolicitudMatricula.toString())
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            respuesta.forEach(asignaturaSolicitudMatricula => {
                this.getAsignatura(asignaturaSolicitudMatricula.idAsignatura);
            });
        })
        .catch(error => {

        });
    }

    getAsignatura(idAsignatura: number): void {
        this.busy = this.asignaturaDataService.get(idAsignatura)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.asignaturasMatriculables.push(respuesta);
        })
        .catch(error => {

        });
    }

    getDatosInstituto(idCarrera: number): void {
        this.busy = this.matriculacionDataService.getDatosInstituto(idCarrera)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.datosInstituto = respuesta;
            this.logo = 'assets/images/logos/' + this.datosInstituto.nombre + '.png';
        })
        .catch(error => {

        });
    }

    getPeriodoLectivoActual(): void {
        this.busy = this.matriculacionDataService.getPeriodoLectivoActual()
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.periodoLectivoActual = respuesta;
        })
        .catch(error => {

        });
    }

    getDatosCupo(idPersona: number): void {
        this.busy = this.matriculacionDataService.getDatosCupo(idPersona)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
                return;
            }
            this.datosCupo = respuesta;
            this.asignaturasMatriculables = [];
            this.getDatosInstituto(this.datosCupo.idCarrera);
            this.getAsignaturasMatriculables(this.solicitudMatriculaSeleccionada.id);
            this.barcode = this.solicitudMatriculaSeleccionada.codigo;
        })
        .catch(error => {

        });
    }

    aceptar(): void {
        this.solicitudMatriculaSeleccionada.idEstadoSolicitud = 2;
        this.busy = this.solicitudMatriculaDataService.update(this.solicitudMatriculaSeleccionada)
        .then(respuesta => {
            this.toastr.success('Datos Confirmados Satisfactoriamente', 'Matriculación');
            this.actualizar();
        })
        .catch(error => {
            this.toastr.warning('Se produjo un error', 'Matriculación');
        });
    }
}
