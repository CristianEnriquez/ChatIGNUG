import { FotoPerfilService } from 'app/CRUD/fotoperfil/fotoperfil.service';
import { UsePipeTransformInterfaceRule } from 'codelyzer';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginResult } from 'app/entidades/especifico/Login-Result';
import { stringify } from '@angular/core/src/util';
import { Persona } from 'app/entidades/CRUD/Persona';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    srcFoto: string;
    fotoNombre: string;
    fotoType: string;
    fotoFile: string;
    busy: Promise<any>;
    personaLogeada: Persona;
    pushRightClass: string = 'push-right';
    username: string;

    contactSpaceVisible: boolean;

    constructor(private translate: TranslateService, public router: Router, private fotoPerfilDataService: FotoPerfilService) {
        this.contactSpaceVisible = true;
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        let logedResult = JSON.parse(localStorage.getItem('logedResult')) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.username = this.personaLogeada.nombre1 + ' ' + this.personaLogeada.nombre2 + ' ' + this.personaLogeada.apellido1 + ' ' + this.personaLogeada.apellido2;
        this.getFotoPerfil();
    }

    refreshContactVisibleState() {
        if (this.contactSpaceVisible) {
            this.contactSpaceVisible = false;
        } else {
            this.contactSpaceVisible = true;
        }
        localStorage.setItem('contactSpaceVisibleState', JSON.stringify(this.contactSpaceVisible));
    }

    getFotoPerfil() {
        this.srcFoto = 'assets/images/user.png';
     /*   this.busy = this.fotoPerfilDataService.getFiltrado('idPersona', 'coincide', this.personaLogeada.id.toString())
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

            });
            */
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
