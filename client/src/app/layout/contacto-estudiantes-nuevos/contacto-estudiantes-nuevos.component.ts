import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Persona} from './../../entidades/CRUD/Persona';
import {PersonaService} from './../../CRUD/persona/persona.service';

import 'rxjs/add/operator/toPromise';
import {ModalComponent} from 'app/layout/bs-component/components';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {Carrera} from 'app/entidades/CRUD/Carrera';
import {CarreraService} from 'app/CRUD/carrera/carrera.service';
import {ContactoEstudiantesNuevosService} from 'app/layout/contacto-estudiantes-nuevos/contacto-estudiantes-nuevos.service';

@Component({
    selector: 'app-contacto-estudiantes-nuevos',
    templateUrl: './contacto-estudiantes-nuevos.component.html',
    styleUrls: ['./contacto-estudiantes-nuevos.component.scss']
})

export class ContactoEstudiantesNuevosComponent implements OnInit {
    flag: boolean;
    busy: Promise<any>;
    entidades: Persona[];
    entidadSeleccionada: Persona;
    pagina: 1;
    tamanoPagina: 20;
    paginaActual: number;
    paginaUltima: number;
    registrosPorPagina: number;
    esVisibleVentanaEdicion: boolean;
    carreras: Carrera[];
    carreraSeleccionadaCombo: number;

    constructor(public toastr: ToastsManager,
                vcr: ViewContainerRef,
                private dataService: PersonaService,
                private modalService: NgbModal,
                private carreraDataService: CarreraService,
                private noContactadosDataService: ContactoEstudiantesNuevosService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    getCarreras() {
        this.busy = this.carreraDataService.getCarrerasVigentes()
            .then(respuesta => {
                this.carreras = respuesta;
            })
            .catch(error => {

            });
    }

    open(content, nuevo) {
        const logoutScreenOptions: NgbModalOptions = {
            size: 'lg'
        };
        if (nuevo) {
            this.resetEntidadSeleccionada();
        }
        this.modalService.open(content, logoutScreenOptions)
            .result
            .then((result => {
                if (result === 'save') {
                    this.aceptar();
                }
            }), (result => {
                //Esto se ejecuta si la ventana se cierra sin aceptar los cambios
            }));
    }

    estaSeleccionado(porVerificar): boolean {
        if (this.entidadSeleccionada == null) {
            return false;
        }
        return porVerificar.id === this.entidadSeleccionada.id;
    }

    cerrarVentanaEdicion(): void {
        this.esVisibleVentanaEdicion = false;
    }

    mostrarVentanaNuevo(): void {
        this.resetEntidadSeleccionada();
        this.esVisibleVentanaEdicion = true;
    }

    mostrarVentanaEdicion(): void {
        this.esVisibleVentanaEdicion = true;
    }

    resetEntidadSeleccionada(): void {
        this.entidadSeleccionada = this.crearEntidad();
    }

    getAll(): void {
        this.busy = this.noContactadosDataService
            .getAll(this.carreraSeleccionadaCombo)
            .then(entidadesRecuperadas => {
                if (JSON.stringify(entidadesRecuperadas) == 'false') {
                    return;
                }
                this.entidades = entidadesRecuperadas
                if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    //   this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }

    getPagina(pagina: number, tamanoPagina: number): void {
        this.flag = true;
        this.busy = this.noContactadosDataService
            .getPagina(pagina, tamanoPagina, this.carreraSeleccionadaCombo)
            .then(entidadesRecuperadas => {
                if (JSON.stringify(entidadesRecuperadas) == 'false') {
                    return;
                }
                this.entidades = entidadesRecuperadas;
                this.flag = false;
                if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
                    this.toastr.success('¡No hay datos!', 'Consulta');
                } else {
                    //this.toastr.success('La consulta fue exitosa', 'Consulta');
                }
            })
            .catch(error => {
                this.toastr.success('Se produjo un error', 'Consulta');
            });
    }

    getNumeroPaginas(tamanoPagina: number): void {
        this.busy = this.noContactadosDataService
            .getNumeroPaginas(tamanoPagina, this.carreraSeleccionadaCombo)
            .then(respuesta => {
                if (JSON.stringify(respuesta) == 'false') {
                    return;
                }
                this.paginaUltima = respuesta.paginas;
            })
            .catch(error => {
                //Error al leer las paginas
            });
    }

    isValid(entidadPorEvaluar: Persona): boolean {
        return true;
    }

    aceptar(): void {
        this.busy = this.dataService
            .update(this.entidadSeleccionada)
            .then(respuesta => {
                this.busy = this.noContactadosDataService
                    .contactado(this.entidadSeleccionada.id)
                    .then(respuesta => {
                        this.toastr.success('La actualización fue exitosa, estudiante Contactado', 'Actualización');
                        this.refresh();
                    })
                    .catch(error => {
                        //Error al leer las paginas
                    });
            })
            .catch(error => {
                //Error al leer las paginas
            });
        this.cerrarVentanaEdicion();
    }

    crearEntidad(): Persona {
        const nuevoPersona = new Persona();
        nuevoPersona.id = 0;
        return nuevoPersona;
    }

    update(entidadParaActualizar: Persona): void {
        this.busy = this.dataService.update(entidadParaActualizar)
            .then(respuesta => {
                if (respuesta) {
                    this.toastr.success('La actualización fue exitosa', 'Actualización');
                } else {
                    this.toastr.warning('Se produjo un error', 'Actualización');
                }
                this.refresh();
            })
            .catch(error => {
                this.toastr.warning('Se produjo un error', 'Actualización');
            });
    }

    filtroSeleccionado() {
        this.paginaActual = 1;
        this.refresh();
    }

    refresh(): void {
        this.getPagina(this.paginaActual, this.registrosPorPagina);
        this.getNumeroPaginas(this.registrosPorPagina);
    }

    getPaginaPrimera(): void {
        this.paginaActual = 1;
        this.refresh();
    }

    getPaginaAnterior(): void {
        if (this.paginaActual > 1) {
            this.paginaActual = this.paginaActual - 1;
            this.refresh();
        }
    }

    getPaginaSiguiente(): void {
        if (this.paginaActual < this.paginaUltima) {
            this.paginaActual = this.paginaActual + 1;
            this.refresh();
        }
    }

    getPaginaUltima(): void {
        this.paginaActual = this.paginaUltima;
        this.refresh();
    }

    ngOnInit() {
        this.flag = false;
        this.paginaActual = 1;
        this.registrosPorPagina = 5;
        this.entidades = Persona[0];
        this.entidadSeleccionada = this.crearEntidad();
        this.carreraSeleccionadaCombo = 0;
        this.getCarreras();
        this.refresh();
    }

    onSelect(entidadActual: Persona): void {
        this.entidadSeleccionada = entidadActual;
    }
}
