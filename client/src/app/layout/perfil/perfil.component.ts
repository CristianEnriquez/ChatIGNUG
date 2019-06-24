import {TipoMatricula} from './../../entidades/CRUD/TipoMatricula';
import {CupoService} from './../../CRUD/cupo/cupo.service';
import {Cupo} from './../../entidades/CRUD/Cupo';
import {DestinoRecursosEstudianteService} from './../../CRUD/destinorecursosestudiante/destinorecursosestudiante.service';
import {DestinoRecursosEstudiante} from './../../entidades/CRUD/DestinoRecursosEstudiante';
import {AreaEmpresaTrabajaService} from './../../CRUD/areaempresatrabaja/areaempresatrabaja.service';
import {AreaEmpresaTrabaja} from './../../entidades/CRUD/AreaEmpresaTrabaja';
import {OcupacionEstudianteService} from './../../CRUD/ocupacionestudiante/ocupacionestudiante.service';
import {OcupacionEstudiante} from './../../entidades/CRUD/OcupacionEstudiante';
import {AlcanceProyectoVinculacionService} from './../../CRUD/alcanceproyectovinculacion/alcanceproyectovinculacion.service';
import {AlcanceProyectoVinculacion} from './../../entidades/CRUD/AlcanceProyectoVinculacion';
import {SectorEconomicoPracticasPreprofesionalesService} from './../../CRUD/sectoreconomicopracticaspreprofesionales/sectoreconomicopracticaspreprofesionales.service';
import {SectorEconomicoPracticasPreprofesionales} from './../../entidades/CRUD/SectorEconomicoPracticasPreprofesionales';
import {TipoInstitucionPracticasPreprofesionalesService} from './../../CRUD/tipoinstitucionpracticaspreprofesionales/tipoinstitucionpracticaspreprofesionales.service';
import {TipoInstitucionPracticasPreprofesionales} from './../../entidades/CRUD/TipoInstitucionPracticasPreprofesionales';
import {TipoBachilleratoService} from './../../CRUD/tipobachillerato/tipobachillerato.service';
import {TipoBachillerato} from './../../entidades/CRUD/TipoBachillerato';
import {CategoriaMigratoriaService} from './../../CRUD/categoriamigratoria/categoriamigratoria.service';
import {CategoriaMigratoria} from './../../entidades/CRUD/CategoriaMigratoria';
import {LoginResult} from '../../entidades/especifico/Login-Result';
import {Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
// SERVICIOS
import {PersonaService} from 'app/CRUD/persona/persona.service';
import {GeneroService} from 'app/CRUD/genero/genero.service';
import {EtniaService} from 'app/CRUD/etnia/etnia.service';
import {TipoIngresosService} from 'app/CRUD/tipoingresos/tipoingresos.service';
import {OcupacionService} from 'app/CRUD/ocupacion/ocupacion.service';
import {TipoDiscapacidadService} from 'app/CRUD/tipodiscapacidad/tipodiscapacidad.service';
import {TipoSangreService} from 'app/CRUD/tiposangre/tiposangre.service';
import {EstadoCivilService} from 'app/CRUD/estadocivil/estadocivil.service';
import {TituloService} from 'app/CRUD/titulo/titulo.service';
import {EstudianteService} from 'app/CRUD/estudiante/estudiante.service';
import {TipoInstitucionProcedenciaService} from 'app/CRUD/tipoinstitucionprocedencia/tipoinstitucionprocedencia.service';
import {NivelTituloService} from 'app/CRUD/niveltitulo/niveltitulo.service';
import {UbicacionService} from 'app/CRUD/ubicacion/ubicacion.service';
// ENTIDADES
import {Persona} from 'app/entidades/CRUD/Persona';
import {Genero} from 'app/entidades/CRUD/Genero';
import {Etnia} from 'app/entidades/CRUD/Etnia';
import {TipoIngresos} from 'app/entidades/CRUD/TipoIngresos';
import {Ocupacion} from 'app/entidades/CRUD/Ocupacion';
import {TipoDiscapacidad} from 'app/entidades/CRUD/TipoDiscapacidad';
import {TipoSangre} from 'app/entidades/CRUD/TipoSangre';
import {EstadoCivil} from 'app/entidades/CRUD/EstadoCivil';
import {Titulo} from 'app/entidades/CRUD/Titulo';
import {TipoInstitucionProcedencia} from 'app/entidades/CRUD/TipoInstitucionProcedencia';
import {NivelTitulo} from 'app/entidades/CRUD/NivelTitulo';
import {Ubicacion} from 'app/entidades/CRUD/Ubicacion';
import {Estudiante} from 'app/entidades/CRUD/Estudiante';
import {FotoPerfilService} from 'app/CRUD/fotoperfil/fotoperfil.service';
import {FotoPerfil} from 'app/entidades/CRUD/FotoPerfil';
import {TipoDocumento} from '../../entidades/CRUD/TipoDocumento';
import {TipoDocumentoService} from '../../CRUD/tipodocumento/tipodocumento.service';
import {TipoMatriculaService} from '../../CRUD/tipomatricula/tipomatricula.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    @ViewChild('fileInput') fileInput;
    busy: Promise<any>;
    srcFoto: string;
    personaLogeada: Persona;
    rol: number;
    estudiante: Estudiante;
    generos: Genero[] = [];
    categoriasmigratorias: CategoriaMigratoria[] = [];
    etnias: Etnia[] = [];
    tiposIngresos: TipoIngresos[] = [];
    tiposSangre: TipoSangre[] = [];
    estadosCivil: EstadoCivil[] = [];
    titulos: Titulo[] = [];
    tiposInstitucionProcedencia: TipoInstitucionProcedencia[] = [];
    nivelesTitulo: NivelTitulo[] = [];
    alcancesProyectosVinculacion: AlcanceProyectoVinculacion[] = [];
    ubicaciones: Ubicacion[] = [];
    paises: Ubicacion[] = [];
    tiposBachilleratos: TipoBachillerato[] = [];
    tiposDocumentos: TipoDocumento[] = [];
    provinciasDomicilio: Ubicacion[] = [];
    cantonesDomicilio: Ubicacion[] = [];
    parroquiasDomicilio: Ubicacion[] = [];
    provinciasNacimiento: Ubicacion[] = [];
    cupo: Cupo;
    tiposMatricula: TipoMatricula[] = [];
    ocupacionesEstudiante: OcupacionEstudiante[] = [];
    areasTrabajoEmpresa: AreaEmpresaTrabaja[] = [];
    sectoresEconomicosPracticasPreprofesionales: SectorEconomicoPracticasPreprofesionales[] = [];
    cantonesNacimiento: Ubicacion[] = [];
    destinosRecursosEstudiante: DestinoRecursosEstudiante[] = [];
    parroquiasNacimiento: Ubicacion[] = [];
    ocupaciones: Ocupacion[] = [];
    tiposInstitucionesPracticasPreprofesionales: TipoInstitucionPracticasPreprofesionales[] = [];
    tiposDiscapacidad: TipoDiscapacidad[] = [];
    tieneDiscapacidad: Boolean;
    practicasPreprofesionales: Boolean;
    poseeTituloEducacionSuperior: Boolean;
    hablaIdiomaAncestral: Boolean;
    bonoDesarrolloHumano: Boolean;
    perdidoMateria: Boolean;
    perdidoGratuidad: Boolean;
    vinculacionSociedadInstituto: Boolean;
    esEstudiante: Boolean;
    fotoNombre: string;
    fotoType: string;
    fotoFile: string;

    constructor(public toastr: ToastsManager, vcr: ViewContainerRef,
                private personaDataService: PersonaService,
                private generoDataService: GeneroService,
                private tipoDocumentoDataService: TipoDocumentoService,
                private estadoCivilDataService: EstadoCivilService,
                private etniaDataService: EtniaService,
                private tipoSangreDataService: TipoSangreService,
                private ingresosDataService: TipoIngresosService,
                private ocupacionDataService: OcupacionService,
                private ocupacionEstudianteDataService: OcupacionEstudianteService,
                private tipoDiscapacidadDataService: TipoDiscapacidadService,
                private ubicacionDataService: UbicacionService,
                private destinoRecursosEstudianteDataService: DestinoRecursosEstudianteService,
                private categoriaMigratoriaDataService: CategoriaMigratoriaService,
                private nivelTituloDataService: NivelTituloService,
                private tipoBachilleratoDataService: TipoBachilleratoService,
                private cupoDataService: CupoService,
                private tipoMatriculaDataService: TipoMatriculaService,
                private estudianteDataService: EstudianteService,
                private areaEmpresaTrabajaDataService: AreaEmpresaTrabajaService,
                private alcanceProyectoVinculacionDataService: AlcanceProyectoVinculacionService,
                private sectorEconomicoPracticasDataService: SectorEconomicoPracticasPreprofesionalesService,
                private tipoInstitucionPRacticasPreprofesionalesDataService: TipoInstitucionPracticasPreprofesionalesService,
                private tipoInstitucionProcedenciaService: TipoInstitucionProcedenciaService,
                private fotoPerfilDataService: FotoPerfilService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    CodificarArchivo(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.fotoNombre = file.name;
                this.fotoType = file.type;
                this.fotoFile = reader.result.split(',')[1];
                this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
            };
        }
    }

    ngOnInit() {
        this.esEstudiante = false;
        this.estudiante = new Estudiante();
        this.cupo = new Cupo();
        this.tieneDiscapacidad = false;
        this.poseeTituloEducacionSuperior = false;
        this.hablaIdiomaAncestral = false;
        this.bonoDesarrolloHumano = false;
        this.practicasPreprofesionales = false;
        this.vinculacionSociedadInstituto = false;
        this.perdidoGratuidad = false;
        this.perdidoMateria = false;
        const logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.rol = logedResult.idRol;
        this.busy = this.generoDataService.getAll()
            .then(respuesta => {
                this.generos = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoDocumentoDataService.getAll()
            .then(respuesta => {
                this.tiposDocumentos = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoMatriculaDataService.getAll()
            .then(respuesta => {
                this.tiposMatricula = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.destinoRecursosEstudianteDataService.getAll()
            .then(respuesta => {
                this.destinosRecursosEstudiante = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.sectorEconomicoPracticasDataService.getAll()
            .then(respuesta => {
                this.sectoresEconomicosPracticasPreprofesionales = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.areaEmpresaTrabajaDataService.getAll()
            .then(respuesta => {
                this.areasTrabajoEmpresa = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.alcanceProyectoVinculacionDataService.getAll()
            .then(respuesta => {
                this.alcancesProyectosVinculacion = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.estadoCivilDataService.getAll()
            .then(respuesta => {
                this.estadosCivil = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.ocupacionEstudianteDataService.getAll()
            .then(respuesta => {
                this.ocupacionesEstudiante = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoInstitucionPRacticasPreprofesionalesDataService.getAll()
            .then(respuesta => {
                this.tiposInstitucionesPracticasPreprofesionales = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoBachilleratoDataService.getAll()
            .then(respuesta => {
                this.tiposBachilleratos = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.etniaDataService.getAll()
            .then(respuesta => {
                this.etnias = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.categoriaMigratoriaDataService.getAll()
            .then(respuesta => {
                this.categoriasmigratorias = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoSangreDataService.getAll()
            .then(respuesta => {
                this.tiposSangre = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.ingresosDataService.getAll()
            .then(respuesta => {
                this.tiposIngresos = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.ocupacionDataService.getAll()
            .then(respuesta => {
                this.ocupaciones = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoDiscapacidadDataService.getAll()
            .then(respuesta => {
                this.tiposDiscapacidad = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.ubicacionDataService.getAll()
            .then(respuesta => {
                this.ubicaciones = respuesta;
                this.paises = [];
                this.ubicaciones.forEach(element => {
                    if (element.codigoPadre == null) {
                        this.paises.push(element);
                    }
                });
                this.getProvinciasDomicilio();
                this.getCantonesDomicilio();
                this.getParroquiasDomicilio();
                this.getProvinciasNacimiento();
                this.getCantonesNacimiento();
                this.getParroquiasNacimiento();
            })
            .catch(error => {

            });
        this.busy = this.nivelTituloDataService.getAll()
            .then(respuesta => {
                this.nivelesTitulo = respuesta;
            })
            .catch(error => {

            });
        this.busy = this.tipoInstitucionProcedenciaService.getAll()
            .then(respuesta => {
                this.tiposInstitucionProcedencia = respuesta;
            })
            .catch(error => {

            });
        if (this.personaLogeada.carnetConadis === 'true') {
            this.tieneDiscapacidad = true;
        } else {
            this.tieneDiscapacidad = false;
            this.personaLogeada.carnetConadis = 'false';
        }
        if (this.personaLogeada.hablaIdiomaAncestral === 'true') {
            this.hablaIdiomaAncestral = true;
        } else {
            this.hablaIdiomaAncestral = false;
            this.personaLogeada.hablaIdiomaAncestral = 'false';
        }
        if (this.personaLogeada.bonoDesarrolloHumano === 'true') {
            this.bonoDesarrolloHumano = true;
        } else {
            this.bonoDesarrolloHumano = false;
            this.personaLogeada.bonoDesarrolloHumano = 'false';
        }
        if (this.rol === 2 || this.rol === 6) {
            this.esEstudiante = true;
            this.busy = this.estudianteDataService.getFiltrado('idPersona', 'coincide', this.personaLogeada.id.toString())
                .then(respuesta => {
                    this.estudiante = respuesta[0];
                    if (this.estudiante.poseeTituloEducacionSuperior === 'true') {
                        this.poseeTituloEducacionSuperior = true;
                    } else {
                        this.estudiante.poseeTituloEducacionSuperior = 'false';
                        this.poseeTituloEducacionSuperior = false;
                    }
                    if (this.estudiante.realizadoPracticasPreprofesionales === 'true') {
                        this.practicasPreprofesionales = true;
                    } else {
                        this.estudiante.realizadoPracticasPreprofesionales = 'false';
                        this.practicasPreprofesionales = false;
                    }
                    if (this.estudiante.participadoProyectoVinculacion === 'true') {
                        this.vinculacionSociedadInstituto = true;
                    } else {
                        this.estudiante.participadoProyectoVinculacion = 'false';
                        this.vinculacionSociedadInstituto = false;
                    }
                    if (this.estudiante.perdidoGratuidad === 'true') {
                        this.perdidoGratuidad = true;
                    } else {
                        this.estudiante.perdidoGratuidad = 'false';
                        this.perdidoGratuidad = false;
                    }
                    if (this.estudiante.repetidoMateria === 'true') {
                        this.perdidoMateria = true;
                    } else {
                        this.estudiante.repetidoMateria = 'false';
                        this.perdidoMateria = false;
                    }
                })
                .catch(error => {
                    // Error
                });
            this.busy = this.cupoDataService.getFiltrado('idPersona', 'coincide', this.personaLogeada.id.toString())
                .then(respuesta => {
                    this.cupo = respuesta[0];
                })
                .catch(error => {
                    // Error
                });
        } else {
            this.esEstudiante = false;
        }
        this.getFotoPerfil();
    }

    getProvinciasDomicilio() {
        this.provinciasDomicilio = [];
        this.ubicaciones.forEach(element => {
            if (element.codigoPadre === this.personaLogeada.idUbicacionDomicilioPais) {
                this.provinciasDomicilio.push(element);
            }
        });
    }

    cancelar(): void {
        this.toastr.warning('Los cambios fueron descartados', 'Actualización');
        this.ngOnInit();
    }

    getCantonesDomicilio() {
        this.cantonesDomicilio = [];
        this.ubicaciones.forEach(element => {
            if (element.codigoPadre === this.personaLogeada.idUbicacionDomicilioProvincia) {
                this.cantonesDomicilio.push(element);
            }
        });
    }

    getParroquiasDomicilio() {
        this.parroquiasDomicilio = [];
        this.ubicaciones.forEach(element => {
            if (element.codigoPadre === this.personaLogeada.idUbicacionDomicilioCanton) {
                this.parroquiasDomicilio.push(element);
            }
        });
    }

    getProvinciasNacimiento() {
        this.provinciasNacimiento = [];
        this.ubicaciones.forEach(element => {
            if (element.codigoPadre === this.personaLogeada.idUbicacionNacimientoPais) {
                this.provinciasNacimiento.push(element);
            }
        });
    }

    getCantonesNacimiento() {
        this.cantonesNacimiento = [];
        this.ubicaciones.forEach(element => {
            if (element.codigoPadre === this.personaLogeada.idUbicacionNacimientoProvincia) {
                this.cantonesNacimiento.push(element);
            }
        });
    }

    getParroquiasNacimiento() {
        this.parroquiasNacimiento = [];
        this.ubicaciones.forEach(element => {
            if (element.codigoPadre === this.personaLogeada.idUbicacionNacimientoCanton) {
                this.parroquiasNacimiento.push(element);
            }
        });
    }

    TieneDiscapacidad() {
        if (this.tieneDiscapacidad) {
            this.tieneDiscapacidad = false;
            this.personaLogeada.carnetConadis = 'false';
            this.personaLogeada.idTipoDiscapacidad = null;
            this.personaLogeada.numeroCarnetConadis = null;
            this.personaLogeada.porcentajeDiscapacidad = null;
        } else {
            this.tieneDiscapacidad = true;
            this.personaLogeada.carnetConadis = 'true';
        }
    }

    HablaIdiomaAncestral() {
        if (this.hablaIdiomaAncestral) {
             this.hablaIdiomaAncestral = false;
            this.personaLogeada.hablaIdiomaAncestral = 'false';
            this.personaLogeada.idiomaAncestral = '';
        } else {
             this.hablaIdiomaAncestral = true;
            this.personaLogeada.hablaIdiomaAncestral = 'true';
        }
    }

    PoseeTituloEducacionSuperior() {
        if (this.poseeTituloEducacionSuperior) {
            this.poseeTituloEducacionSuperior = false;
            this.estudiante.poseeTituloEducacionSuperior = 'false';
            this.estudiante.tituloEducacionSuperior = '';
        } else {
            this.poseeTituloEducacionSuperior = true;
            this.estudiante.poseeTituloEducacionSuperior = 'true';
        }
    }

    PerdidoMateria() {
        if (this.perdidoMateria) {
            this.perdidoMateria = false;
            this.estudiante.repetidoMateria = 'false';
        } else {
            this.perdidoMateria = true;
            this.estudiante.repetidoMateria = 'true';
        }
    }

    PerdidoGratuidad() {
        if (this.perdidoGratuidad) {
            this.perdidoGratuidad = false;
            this.estudiante.perdidoGratuidad = 'false';
        } else {
            this.perdidoGratuidad = true;
            this.estudiante.perdidoGratuidad = 'true';
        }
    }

    PracticasPreprofesionales() {
        if (this.practicasPreprofesionales) {
            this.practicasPreprofesionales = false;
            this.estudiante.realizadoPracticasPreprofesionales = 'false';
            this.estudiante.horasPracticasPreprofesionales = null;
            this.estudiante.idTipoInstitucionPracticasPreprofesionales = null;
            this.estudiante.idSectorEconomicoPracticasPreprofesionales = null;
        } else {
            this.practicasPreprofesionales = true;
            this.estudiante.realizadoPracticasPreprofesionales = 'true';
        }
    }

    VinculacionSociedadInstituto() {
        if (this.vinculacionSociedadInstituto) {
            this.vinculacionSociedadInstituto = false;
            this.estudiante.participadoProyectoVinculacion = 'false';
            this.estudiante.idAlcanceProyectoVinculacion = null;
        } else {
            this.vinculacionSociedadInstituto = true;
            this.estudiante.participadoProyectoVinculacion = 'true';
        }
    }

    BonoDesarrolloHumano() {
        if (this.bonoDesarrolloHumano) {
            this.bonoDesarrolloHumano = false;
            this.personaLogeada.bonoDesarrolloHumano = 'false';
        } else {
            this.bonoDesarrolloHumano = true;
            this.personaLogeada.bonoDesarrolloHumano = 'true';
        }
    }

    getFotoPerfil() {
        this.srcFoto = 'assets/images/user.png';
        this.busy = this.fotoPerfilDataService.getFiltrado('idPersona', 'coincide', this.personaLogeada.id.toString())
            .then(respuesta => {
                if (JSON.stringify(respuesta) == '[0]') {
                    return;
                }
                this.fotoFile = respuesta[0].adjunto;
                this.fotoNombre = respuesta[0].nombreArchivo;
                this.fotoType = respuesta[0].tipoArchivo;
                this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
            })
            .catch(error => {
                this.toastr.warning('Se produjo un error', 'Actualización');
            });
    }

    actualizarFoto() {
        const fotoPerfil = new FotoPerfil();
        fotoPerfil.adjunto = this.fotoFile;
        fotoPerfil.nombreArchivo = this.fotoNombre;
        fotoPerfil.tipoArchivo = this.fotoType;
        fotoPerfil.idPersona = this.personaLogeada.id;
        this.busy = this.fotoPerfilDataService.update(fotoPerfil)
            .then(respuesta => {
                if (respuesta) {
                    localStorage.removeItem('logedResult');
                    const newLogResult = new LoginResult();
                    newLogResult.idRol = this.rol;
                    newLogResult.persona = this.personaLogeada;
                    localStorage.setItem('logedResult', JSON.stringify(newLogResult));
                } else {

                }
                this.ngOnInit();
            })
            .catch(error => {

            });
    }

    update(): void {
        this.busy = this.personaDataService.update(this.personaLogeada)
            .then(respuesta => {
                this.updateEstudiante();
                this.actualizarFoto();
                this.updateCupo();
                if (respuesta) {
                    this.toastr.success('La actualización fue exitosa', 'Actualización');
                } else {

                }
            })
            .catch(error => {

            });
    }

    updateEstudiante(): void {
        this.busy = this.estudianteDataService.update(this.estudiante)
            .then(respuesta => {
                if (respuesta) {

                } else {

                }
            })
            .catch(error => {

            });
    }

    updateCupo(): void {
        this.busy = this.cupoDataService.update(this.cupo)
            .then(respuesta => {
                if (respuesta) {

                } else {

                }
            })
            .catch(error => {

            });
    }
}
