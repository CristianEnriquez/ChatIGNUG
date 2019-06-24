import { Component, OnInit } from '@angular/core';
import { LoginResult } from 'app/entidades/especifico/Login-Result';
import { Persona } from 'app/entidades/CRUD/Persona';
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
import { Router } from '@angular/router';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';

import { ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { ElementRef, Renderer2 } from '@angular/core';
import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';

@Component({
    selector: 'app-hoja-datos',
    templateUrl: './hoja-datos.component.html',
    styleUrls: ['./hoja-datos.component.scss']
})
export class HojaDatosComponent implements OnInit {
    busy: Promise<any>;
    personaLogeada: Persona;
    rol: number;
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
    esEstudiante: Boolean;
    rolesSecundarios: RolSecundario[];
    srcFoto: string;
    fotoType: string;
    fotoNombre: string;
    fotoFile: string;

    @ViewChild('encabezadoHojaDatos') encabezadoHojaDatos: ElementRef;
    @ViewChild('cuerpoHojaDatos') cuerpoHojaDatos: ElementRef;
    @ViewChild('pieHojaDatos') pieHojaDatos: ElementRef;
    constructor(
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
        private router: Router,
        private fotoPerfilDataService: FotoPerfilService,
        private rd: Renderer2
    ) {}

    getFotoPerfil() {
        this.srcFoto = 'assets/images/user.png';
        this.busy = this.fotoPerfilDataService.getFiltrado('idPersona', 'coincide' , this.personaLogeada.id.toString())
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

    imprimir() {
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
                    doc.save('HojaDatos' + this.personaLogeada.identificacion + '.pdf');
                });
            });
        });
    }

    ngOnInit() {
        this.esEstudiante = false;
        const logedResult = JSON.parse(
            localStorage.getItem('logedResult')
        ) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.rol = logedResult.idRol;
        this.srcFoto = 'assets/images/user.png';
        this.getFotoPerfil();
        this.busy = this.generoDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idGenero.toString()
            )
            .then(respuesta => {
                this.genero = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.estadoCivilDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idEstadoCivil.toString()
            )
            .then(respuesta => {
                this.estadoCivil = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.etniaDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idEtnia.toString()
            )
            .then(respuesta => {
                this.etnia = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.tipoSangreDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idTipoSangre.toString()
            )
            .then(respuesta => {
                this.tipoSangre = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ingresosDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idIngresos.toString()
            )
            .then(respuesta => {
                this.ingresos = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ocupacionDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idOcupacion.toString()
            )
            .then(respuesta => {
                this.ocupacion = respuesta[0].descripcion;
            })
            .catch(error => {});
        if(this.personaLogeada.idTipoDiscapacidad != null) {
            this.busy = this.tipoDiscapacidadDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idTipoDiscapacidad.toString()
            )
            .then(respuesta => {
                this.tipoDiscapacidad = respuesta[0].descripcion;
            })
            .catch(error => {});
        }
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionDomicilioPais.toString()
            )
            .then(respuesta => {
                this.paisDomicilio = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionDomicilioProvincia.toString()
            )
            .then(respuesta => {
                this.provinciaDomicilio = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionDomicilioCanton.toString()
            )
            .then(respuesta => {
                this.cantonDomicilio = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionDomicilioParroquia.toString()
            )
            .then(respuesta => {
                this.parroquiaDomicilio = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionNacimientoPais.toString()
            )
            .then(respuesta => {
                this.paisNacimiento = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionNacimientoProvincia.toString()
            )
            .then(respuesta => {
                this.provinciaNacimiento = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionNacimientoCanton.toString()
            )
            .then(respuesta => {
                this.cantonNacimiento = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.idUbicacionNacimientoParroquia.toString()
            )
            .then(respuesta => {
                this.parroquiaNacimiento = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.paisOrigenPadre.toString()
            )
            .then(respuesta => {
                this.paisOrigenPadre = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.ubicacionDataService
            .getFiltrado(
                'codigo',
                'coincide',
                this.personaLogeada.paisOrigenMadre.toString()
            )
            .then(respuesta => {
                this.paisOrigenMadre = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.nivelTituloDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idNivelEstudioPadre.toString()
            )
            .then(respuesta => {
                this.nivelEstudioPadre = respuesta[0].descripcion;
            })
            .catch(error => {});
        this.busy = this.nivelTituloDataService
            .getFiltrado(
                'id',
                'coincide',
                this.personaLogeada.idNivelEstudioMadre.toString()
            )
            .then(respuesta => {
                this.nivelEstudioMadre = respuesta[0].descripcion;
            })
            .catch(error => {});
        if (this.rol === 2 || this.rol === 6) {
            this.esEstudiante = true;
            this.busy = this.estudianteDataService
                .getFiltrado(
                    'idPersona',
                    'coincide',
                    this.personaLogeada.id.toString()
                )
                .then(respuesta => {
                    this.idTipoInstitucionProcedencia =
                        respuesta[0].idTipoInstitucionProcedencia;
                    this.tituloBachiller = respuesta[0].tituloBachiller;
                    this.notaPostulacion = respuesta[0].notaPostulacion;
                    this.busy = this.tipoInstitucionProcedenciaService
                        .getFiltrado(
                            'id',
                            'coincide',
                            this.idTipoInstitucionProcedencia.toString()
                        )
                        .then(respuesta1 => {
                            this.tipoInstitucionProcedencia =
                                respuesta1[0].descripcion;
                        })
                        .catch(error => {});
                })
                .catch(error => {
                    // ERROR
                });
        } else {
            this.esEstudiante = false;
        }
    }
}
