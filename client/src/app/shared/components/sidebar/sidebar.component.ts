import { Component, OnInit } from '@angular/core';
import { LoginResult } from 'app/entidades/especifico/Login-Result';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';
import { Persona } from 'app/entidades/CRUD/Persona';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive = false;
    showMenu = '';
    estudiante: Boolean;
    secretariaAcademica: Boolean;
    tutor: Boolean;
    vicerector: Boolean;
    coordinador: Boolean;
    sec: Boolean;
    rol: number;
    personaLogeada: Persona;
    rolMatriculacion: Boolean;
    rolesSecundarios: RolSecundario[];
    constructor() {}

    ngOnInit() {
        const logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.rol = logedResult.idRol;
        this.personaLogeada = logedResult.persona;
        this.rolesSecundarios = JSON.parse(localStorage.getItem('rolesSecundarios')) as RolSecundario[];
        this.estudiante = false;
        this.tutor = false;
        this.secretariaAcademica = false;
        this.rolMatriculacion = false;
        this.coordinador = false;
        this.activarPrivilegiosRol(this.rol);
        this.rolesSecundarios.forEach(rolSecundario => {
            this.activarPrivilegiosRol(rolSecundario.idRol);
        });
    }

    activarPrivilegiosRol(rol: number): void {
        if (rol == 1) {
            this.rolMatriculacion = false;
        }
        if (rol == 2) {
            this.estudiante = true;
            this.rolMatriculacion = true;
        }
        if (rol == 3) {
            this.rolMatriculacion = false;
        }
        if (rol == 4) {
            this.tutor = true;
            this.rolMatriculacion = true;
        }
        if (rol == 5) {
            this.rolMatriculacion = true;
            this.secretariaAcademica = true;
        }
        if (rol == 6) {
            this.rolMatriculacion = true;
            this.estudiante = true;
        }
        if (rol == 8) {
            this.rolMatriculacion = true;
            this.vicerector = true;
        }
        if (rol == 9) {
            this.rolMatriculacion = true;
            this.coordinador = true;
        }
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
