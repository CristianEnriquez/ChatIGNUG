import { Persona } from '../entidades/CRUD/Persona';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginRequest } from '../entidades/especifico/Login-Request';
import { LoginResult } from '../entidades/especifico/Login-Result';
import { LoginService } from './login.service';

import 'rxjs/add/operator/toPromise';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { stringify } from 'querystring';
import { RolSecundario } from 'app/entidades/CRUD/RolSecundario';
import { RolSecundarioService } from 'app/CRUD/rolsecundario/rolsecundario.service';
import { PersonaService } from '../CRUD/persona/persona.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    busy: Promise<any>;
    personaLogeada: Persona;
    loginEntidad: LoginRequest;
    rolesSecundarios: RolSecundario[];
    constructor(private rolesSecundariosDataService: RolSecundarioService,
        public router: Router,
        vcr: ViewContainerRef,
        public toastr: ToastsManager,
        private personaDataService: PersonaService,
        private dataService: LoginService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.loginEntidad = this.crearEntidad();
        this.personaLogeada = new Persona();
    }

    crearEntidad(): LoginRequest {
        const loginEntidad = new LoginRequest();
        loginEntidad.email = '';
        loginEntidad.clave = '';
        return loginEntidad;
    }

    onLoggedin() {
        this.login(this.loginEntidad);
    }

    login(datosLogin: LoginRequest): void {
        this.busy = this.dataService.cuenta(datosLogin)
        .then(respuesta => {
            if (respuesta.idRol === 0) {
                this.toastr.warning('Credenciales Incorrectos', 'Autenticar');
                localStorage.setItem('isLoggedin', 'false');
                this.router.navigate(['/login']);
            } else {
                localStorage.setItem('isLoggedin', 'true');
                this.busy = this.personaDataService.get(respuesta.persona.id)
                .then(r => {
                    respuesta.persona = r;
                    localStorage.setItem('logedResult', JSON.stringify(respuesta));
                })
                .catch(error => {

                });
                this.getRolesSecundarios(respuesta.persona.id);
            }
        })
        .catch(error => {
           this.toastr.warning('Ocurrió un error', 'Autenticar');
        });
    }

    getRolesSecundarios(idPersona: number): void {
        this.busy = this.rolesSecundariosDataService.getFiltrado('idPersona', 'coincide', idPersona.toString())
        .then(respuesta => {
            this.rolesSecundarios = respuesta;
            localStorage.setItem('rolesSecundarios', JSON.stringify(this.rolesSecundarios));
            this.router.navigate(['/yavirac']);
        })
        .catch(error => {

        });
    }

}
