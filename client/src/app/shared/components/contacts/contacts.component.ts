import { FotoPerfil } from './../../../entidades/CRUD/FotoPerfil';
import { Persona } from "./../../../entidades/CRUD/Persona";
import { Carrera } from "./../../../entidades/CRUD/Carrera";
import { FotoPerfilService } from "app/CRUD/fotoperfil/fotoperfil.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { LoginResult } from "app/entidades/especifico/Login-Result";
import { PersonaService } from "app/CRUD/persona/persona.service";
import { ChatCarrerasService } from "app/shared/components/contacts/chat-carreras.service";
import { ChatConsultarSalasService } from "./../contacts/chat-consultar-salas.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Salas } from "./salas";
import { Miembro } from "./miembros";
import * as firebase from 'firebase';
import { parse } from 'querystring';
import { NumberFormatStyle } from '@angular/common';
import { isThisTypeNode } from 'typescript';

@Component({
    selector: "app-contacts",
    templateUrl: "./contacts.component.html",
    styleUrls: ["./contacts.component.scss"],
    providers: [ChatCarrerasService, ChatConsultarSalasService, PersonaService]
})
export class ContactsComponent implements OnInit {
    busy: Promise<any>;
    showMenu = "";
    personaLogeada: Persona;
    userName = "";
    srcFoto: string = '';
    srcFotoPersonaSeleccionada: string = '';
    fotoNombre: string = '';
    fotoType: string = '';
    fotoFile: string = '';
    filtroComunidad: string;
    personasFiltroComunidad = [];
    carreras: Carrera[];
    salaElegida = "nulo";
    salas: Salas[] = [];
    miembrosSeleccionado = [];
    miembroSeleccionado: Miembro = null;
    personaSolicitada: Persona = null;

    constructor(
        private chatConsultarSalasService: ChatConsultarSalasService,
        private fotoPerfilDataService: FotoPerfilService,
        private personaDataService: PersonaService,
        private chatCarrerasService: ChatCarrerasService,
        private modalService: NgbModal,
        private fotoDataService: FotoPerfilService,
    ) { }

    ngOnInit() {
        sessionStorage.setItem("enviarSala", JSON.stringify(this.salaElegida));
        
        this.personaSolicitada = new Persona();


        const logedResult = JSON.parse(
            localStorage.getItem("logedResult")
        ) as LoginResult;
        this.personaLogeada = logedResult.persona;
        this.userName =
            this.personaLogeada.nombre1 +
            " " +
            this.personaLogeada.nombre2 +
            " " +
            this.personaLogeada.apellido1 +
            " " +
            this.personaLogeada.apellido2;

        this.chatConsultarSalasService
            //Aqui carga las salas segun id de la persona logeada
            .getSalas(this.personaLogeada.id)
            .then(r => {
                this.salas = JSON.parse(r) as Salas[];
                this.getNumeroMessages();
            })
            .catch(e => console.log(e));
    }



    refreshContactVisibleState() {
        const estado = JSON.parse(
            localStorage.getItem("contactSpaceVisibleState")
        ) as Boolean;
        return estado;
    }

    salaSeleccionada(sala) {
        sessionStorage.setItem("enviarSala", JSON.stringify(sala + ""));
        
    }


    searchPersonas() {
        this.personasFiltroComunidad = [];
        if (this.filtroComunidad.length < 3) {
            return;
        }
        this.busy = this.personaDataService
            .getFiltradoNombreCompleto(this.filtroComunidad)
            .then(respuesta => {
                if (JSON.stringify(respuesta) == "[0]") {
                } else {
                    respuesta.forEach(persona => {
                        this.personasFiltroComunidad.push(persona);
                    });
                }
            })
            .catch(error => { });
    }

    mostrarContactos(content, contactos) {
        this.miembrosSeleccionado = contactos;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(result => { }, result => { });
    }

    onSelect(entidadActual: Miembro): void {
        this.miembroSeleccionado = entidadActual;
        this.srcFotoPersonaSeleccionada = 'assets/images/user.png';
        this.personaSolicitada = new Persona();
        this.personaDataService.get(entidadActual.idPersona).then(r => {
            this.personaSolicitada = r;
        }).catch(e => console.log(e));
    
    }

    estaSeleccionado(porVerificar): boolean {
        if (this.miembroSeleccionado == null) {
            return false;
        }
        return porVerificar === this.miembroSeleccionado;
    }


    getNumeroMessages(): any {
        this.salas.forEach(sala => {
            let messagesRef = firebase.database().ref('/mensajes').orderByChild('salaID').equalTo(sala.idSala.toString());
            messagesRef.on('value', (snapshot) => {
                sala.mensajesNuevos = snapshot.numChildren();
            });
        });
    }
}

