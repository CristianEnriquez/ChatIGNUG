import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';
import { AsignacionRolesService } from './asignacion-roles.service';

import 'rxjs/add/operator/toPromise';
import { ModalComponent } from 'app/layout/bs-component/components';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { RolSecundarioService } from 'app/CRUD/rolsecundario/rolsecundario.service';
import { Persona } from 'app/entidades/CRUD/Persona';
import { PersonaCombo } from 'app/entidades/especifico/PersonaCombo';
import { Roles } from 'app/entidades/CRUD/Roles';
import { MatriculacionService } from 'app/layout/matriculacion/matriculacion.service';
import { RolesService } from 'app/CRUD/roles/roles.service';

@Component({
   selector: 'app-asignacion-roles',
   templateUrl: './asignacion-roles.component.html',
   styleUrls: ['./asignacion-roles.component.scss']
})

export class AsignacionRolesComponent implements OnInit {

   busy: Promise<any>;
   entidades: RolSecundario[] = [];
   entidadSeleccionada: RolSecundario;
   tamanoPagina: number;
   paginaActual: number;
   paginaUltima: number;
   registrosPorPagina: number;
   esVisibleVentanaEdicion: boolean;
   personasRolesAsignados: PersonaCombo[] = [];
   personasRolesPosiblesAsignar: PersonaCombo[] = [];
   personaSeleccionadoCombo: number;
   roles: Roles[] = [];
   rolesPosibles: Roles[] = [];
   rolSeleccionadoCombo: number;
   constructor(public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private dataService: RolSecundarioService,
        private modalService: NgbModal,
        private matriculacionDataService: MatriculacionService,
        private rolesDataService: RolesService) {
        this.toastr.setRootViewContainerRef(vcr);
   }

    filtroPersonaSeleccionado() {
        this.rolSeleccionadoCombo = 0;
        if ( this.personaSeleccionadoCombo == 0 ) {
            this.refresh();
        } else {
            this.getRolesSecundariosPorPersona(this.personaSeleccionadoCombo);
        }
    }

    filtroRolSeleccionado() {
        this.personaSeleccionadoCombo = 0;
        if ( this.rolSeleccionadoCombo == 0 ) {
            this.refresh();
        } else {
            this.getRolesSecundariosPorRol(this.rolSeleccionadoCombo);
        }
    }

    getRolesSecundariosPorPersona(idPersona: number) {
        this.paginaActual = 1;
        this.paginaUltima = 1;
        this.busy = this.dataService
        .getFiltrado('idPersona', 'coincide', idPersona.toString())
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.entidades = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

    getRolesSecundariosPorRol(idRol: number) {
        this.paginaActual = 1;
        this.paginaUltima = 1;
        this.busy = this.dataService
        .getFiltrado('idRol', 'coincide', idRol.toString())
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.entidades = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

   getRolesPosibles(): void {
        this.roles = [];
        this.rolesPosibles = [];
        this.busy = this.rolesDataService
        .getAll()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            entidadesRecuperadas.forEach(element => {
                if ( element.id == 1 || element.id == 3 || element.id == 7 || element.id == 8 ) {

                } else {
                    this.rolesPosibles.push(element);
                }
            });
        })
        .catch(error => {

        });
    }
   getRolesAsignados(): void {
        this.roles = [];
        this.busy = this.matriculacionDataService
        .getRolesSecundariosRegistrados()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.roles = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

    getPersonasConRolesAsignados(): void {
        this.personasRolesAsignados = [];
        this.busy = this.matriculacionDataService
        .getPersonasRolesSecundariosRegistrados()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.personasRolesAsignados = entidadesRecuperadas;
        })
        .catch(error => {

        });
    }

    getPersonasPosiblesDeAsignar(): void {
        this.personasRolesPosiblesAsignar = [];
        this.busy = this.matriculacionDataService
        .getPersonasRolesSecundariosAdmitidos()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(entidadesRecuperadas) == 'false' ) {
                return;
            }
            this.personasRolesPosiblesAsignar = entidadesRecuperadas;
        })
        .catch(error => {

        });
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

   getAll(): void {
      this.busy = this.dataService
      .getAll()
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

   getPagina(pagina: number, tamanoPagina: number): void {
      this.busy = this.dataService
      .getPagina(pagina, tamanoPagina)
      .then(entidadesRecuperadas => {
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

   getNumeroPaginas(tamanoPagina: number): void{
      this.busy = this.dataService
      .getNumeroPaginas(tamanoPagina)
      .then(respuesta => {
         if ( JSON.stringify(respuesta) == 'false' ) {
             return;
         }
         this.paginaUltima = respuesta.paginas;
         this.paginaActual = 1;
      })
      .catch(error => {
         //Error al leer las paginas
      });
   }

   isValid(entidadPorEvaluar: RolSecundario): boolean {
      return true;
   }

   aceptar(): void {
      if (!this.isValid(this.entidadSeleccionada)) {return;}
      if (this.entidadSeleccionada.id === undefined || this.entidadSeleccionada.id === 0) {
         this.add(this.entidadSeleccionada);
      } else {
         this.update(this.entidadSeleccionada);
      }
      this.cerrarVentanaEdicion();
   }

   crearEntidad(): RolSecundario {
      const nuevoRolSecundario = new RolSecundario();
      nuevoRolSecundario.id = 0;
      return nuevoRolSecundario;
   }

   add(entidadNueva: RolSecundario): void {
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

   update(entidadParaActualizar: RolSecundario): void {
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

   delete(entidadParaBorrar: RolSecundario): void {
      this.busy = this.dataService.remove(entidadParaBorrar.id)
      .then(respuesta => {
         if(respuesta){
            this.toastr.success('La eliminación fue exitosa', 'Eliminación');
         }else{
            this.toastr.warning('Se produjo un error', 'Eliminación');
         }
         this.refresh();
      })
      .catch(error => {
         this.toastr.success('Se produjo un error', 'Eliminación');
      });
   }

   refresh(): void {
        this.entidades = [];
        this.entidadSeleccionada = this.crearEntidad();
        this.getNumeroPaginas(this.registrosPorPagina);
        this.getPagina(this.paginaActual, this.registrosPorPagina);
        this.getRolesAsignados();
        this.getPersonasConRolesAsignados();
        this.getPersonasPosiblesDeAsignar();
        this.getRolesPosibles();
        this.personaSeleccionadoCombo = 0;
        this.rolSeleccionadoCombo = 0;
   }

   getPaginaPrimera():void {
      if ( this.personaSeleccionadoCombo == 0 && this.rolSeleccionadoCombo == 0) {
        this.paginaActual = 1;
        this.refresh();
      }
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
        if ( this.personaSeleccionadoCombo == 0 && this.rolSeleccionadoCombo == 0) {
            this.paginaActual = this.paginaUltima;
            this.refresh();
        }
   }

   ngOnInit() {
      this.tamanoPagina = 20;
      this.paginaActual = 1;
      this.registrosPorPagina = 5;
      this.refresh();
   }

   onSelect(entidadActual: RolSecundario): void {
      this.entidadSeleccionada = entidadActual;
   }
}
