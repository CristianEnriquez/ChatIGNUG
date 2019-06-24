import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AsignacionAsignaturasCupoService } from './asignacion-asignaturas-cupo.service';

import 'rxjs/add/operator/toPromise';
import { ModalComponent } from 'app/layout/bs-component/components';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Carrera } from 'app/entidades/CRUD/Carrera';
import { Jornada } from 'app/entidades/CRUD/Jornada';
import { PersonaCombo } from 'app/entidades/especifico/PersonaCombo';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { JornadaService } from 'app/CRUD/jornada/jornada.service';
import { AsignacionAsignaturaCupo } from 'app/entidades/especifico/Asignacion_Asignatura_Cupo';
import { AsignaturaCupoService } from 'app/CRUD/asignaturacupo/asignaturacupo.service';
import { AsignaturaCupo } from 'app/entidades/CRUD/AsignaturaCupo';
import { Malla } from 'app/entidades/CRUD/Malla';
import { MallaService } from 'app/CRUD/malla/malla.service';
import { AsignaturaService } from 'app/CRUD/asignatura/asignatura.service';
import { Asignatura } from 'app/entidades/CRUD/Asignatura';
@Component({
   selector: 'app-asignacion-asignaturas-cupo',
   templateUrl: './asignacion-asignaturas-cupo.component.html',
   styleUrls: ['./asignacion-asignaturas-cupo.component.scss']
})

export class AsignacionAsignaturasCupoComponent implements OnInit {
   busy: Promise<any>;
   entidades: AsignacionAsignaturaCupo[] = [];
   entidadSeleccionada: AsignaturaCupo;
   paginaActual: number;
   paginaUltima: number;
   registrosPorPagina: number;
   esVisibleVentanaEdicion: boolean;
   jornadaSeleccionadaCombo: number;
   carreraSeleccionadaCombo: number;
   carreras: Carrera[] = [];
   jornadas: Jornada[] = [];
   mallas: Malla[] = [];
   asignaturas: Asignatura[] = [];
   personasMostradas: PersonaCombo[] = [];
   estudianteSeleccionadoCombo: number;

   constructor(public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private dataService: AsignaturaCupoService,
        private modalService: NgbModal,
        private matriculacionDataService: MatriculacionService,
        private carreraDataService: CarreraService,
        private jornadaDataService: JornadaService,
        private mallaDataService: MallaService,
        private asignaturaDataService: AsignaturaService,
        private asignacionAsignaturaCupoService: AsignacionAsignaturasCupoService
    ) {
      this.toastr.setRootViewContainerRef(vcr);
   }

    filtroCarreraSeleccionado() {
        this.paginaActual = 1;
        this.getJornadas();
        this.getAlumnosMatriculados();
        this.refresh();
    }

    filtroJornadaSeleccionado() {
        this.paginaActual = 1;
        this.getAlumnosMatriculados();
        this.refresh();
    }

    filtroEstudianteSeleccionado() {
        this.paginaActual = 1;
        this.refresh();
    }

    getJornadas() {
        this.jornadas = [];
        this.busy = this.jornadaDataService
        .getAll()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.jornadaSeleccionadaCombo = 0;
            this.jornadas = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

    getCarreras() {
        this.carreras = [];
        this.busy = this.carreraDataService
        .getAll()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.carreras = entidadesRecuperadas;
            this.carreraSeleccionadaCombo = 0;
        })
        .catch(error => {

        });
    }

    getAsignaturas(idMalla: number) {
        this.asignaturas = [];
        this.busy = this.asignaturaDataService
        .getFiltrado('idMalla', 'coincide', idMalla.toString())
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.asignaturas = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

    getMallas(idCarrera: number) {
        this.mallas = [];
        this.busy = this.mallaDataService
        .getFiltrado('idCarrera', 'coincide', idCarrera.toString())
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.mallas = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

    getAlumnosMatriculados() {
        this.personasMostradas = [];
        this.busy = this.matriculacionDataService
        .getAlumnosMatriculados(this.carreraSeleccionadaCombo, this.jornadaSeleccionadaCombo, 0)
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.personasMostradas = entidadesRecuperadas;
            this.estudianteSeleccionadoCombo = 0;
        })
        .catch(error => {

        });
    }

    refresh(): void {
        this.getNumeroPaginas();
        this.getPagina(this.paginaActual, this.registrosPorPagina);
    }

    ngOnInit() {
        this.carreraSeleccionadaCombo = 0;
        this.jornadaSeleccionadaCombo = 0;
        this.estudianteSeleccionadoCombo = 0;
        this.paginaActual = 1;
        this.registrosPorPagina = 5;
        this.entidadSeleccionada = new AsignaturaCupo();
        this.getCarreras();
        this.getJornadas();
        this.getAlumnosMatriculados();
        this.refresh();
    }

    open(content, nuevo){
        if(nuevo){
           this.resetEntidadSeleccionada();
        }
        this.modalService.open(content)
        .result
        .then((result => {
           if(result=="save"){
              this.aceptar();
           }
        }),(result => {
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

    getPagina(pagina: number, tamanoPagina: number): void {
        this.entidades = [];
        this.busy = this.asignacionAsignaturaCupoService
        .getPagina(this.jornadaSeleccionadaCombo, this.carreraSeleccionadaCombo, this.estudianteSeleccionadoCombo, pagina, tamanoPagina)
        .then(entidadesRecuperadas => {
        if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
            return;
        }
        this.entidades = entidadesRecuperadas
        if (entidadesRecuperadas == null || entidadesRecuperadas.length === 0) {
            this.toastr.success('¡No hay datos!', 'Consulta');
        } else {
            this.toastr.success('La consulta fue exitosa', 'Consulta');
        }
        })
        .catch(error => {
        this.toastr.success('Se produjo un error', 'Consulta');
        });
    }

    getNumeroPaginas(): void {
        this.busy = this.asignacionAsignaturaCupoService
        .getNumeroPaginas(this.registrosPorPagina, this.jornadaSeleccionadaCombo, this.carreraSeleccionadaCombo, this.estudianteSeleccionadoCombo)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false' ) {
            return;
            }
            this.paginaUltima = respuesta.paginas;
        })
        .catch(error => {
        //Error al leer las paginas
        });
    }

    isValid(entidadPorEvaluar: AsignaturaCupo): boolean {
        return true;
    }

    aceptar(): void {
        this.paginaActual = 1;
        if (!this.isValid(this.entidadSeleccionada)) {return;}
        if (this.entidadSeleccionada.id === undefined || this.entidadSeleccionada.id === 0) {
            this.add(this.entidadSeleccionada);
        } else {
            this.update(this.entidadSeleccionada);
        }
        this.cerrarVentanaEdicion();
    }

    add(entidadNueva: AsignaturaCupo): void {
        this.busy = this.dataService.create(entidadNueva)
        .then(respuesta => {
        if(respuesta){
            this.toastr.success('La creación fue exitosa', 'Creación');
        }else{
            this.toastr.warning('Se produjo un error', 'Creación');
        }
        this.refresh();
        })
        .catch(error => {
        this.toastr.warning('Se produjo un error', 'Creación');
        });
    }

    crearEntidad(): AsignaturaCupo {
        const nuevoAsignaturaCupo = new AsignaturaCupo();
        nuevoAsignaturaCupo.id = 0;
        return nuevoAsignaturaCupo;
    }

    update(entidadParaActualizar: AsignaturaCupo): void {
        this.busy = this.dataService.update(entidadParaActualizar)
        .then(respuesta => {
        if(respuesta){
            this.toastr.success('La actualización fue exitosa', 'Actualización');
        }else{
            this.toastr.warning('Se produjo un error', 'Actualización');
        }
        this.refresh();
        })
        .catch(error => {
        this.toastr.warning('Se produjo un error', 'Actualización');
        });
    }

    getPaginaPrimera():void {
        this.paginaActual = 1;
        this.refresh();
    }

    getPaginaAnterior():void {
        if(this.paginaActual>1){
        this.paginaActual = this.paginaActual - 1;
        this.refresh();
        }
    }

    getPaginaSiguiente():void {
        if(this.paginaActual < this.paginaUltima){
        this.paginaActual = this.paginaActual + 1;
        this.refresh();
        }
    }

    getPaginaUltima():void {
        this.paginaActual = this.paginaUltima;
        this.refresh();
    }

    onSelect(entidadActual: AsignacionAsignaturaCupo): void {
        this.busy = this.dataService.get(entidadActual.id)
        .then(respuesta => {
            this.entidadSeleccionada = respuesta;
            this.getMallas(this.entidadSeleccionada.idCarrera);
            this.getAsignaturas(this.entidadSeleccionada.idMalla);
        })
        .catch(error => {

        });
    }

    delete(entidadParaBorrar: AsignaturaCupo): void {
        this.busy = this.dataService.remove(entidadParaBorrar.id)
        .then(respuesta => {
           if(respuesta){
              this.toastr.success('La eliminación fue exitosa', 'Eliminación');
           }else{
              this.toastr.warning('Se produjo un error', 'Eliminación');
           }
           this.paginaActual = 1;
           this.refresh();
        })
        .catch(error => {
           this.toastr.success('Se produjo un error', 'Eliminación');
        });
     }
}
