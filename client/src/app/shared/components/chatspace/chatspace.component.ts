import { Component, OnInit,ViewContainerRef, Input, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
import { FormGroup } from "@angular/forms";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//clases
import { Persona } from "app/entidades/CRUD/Persona";
import { LoginResult } from "./../../../entidades/especifico/Login-Result";

//servicios
import { FotoPerfilService } from "app/CRUD/fotoperfil/fotoperfil.service";
import { ChatObtenerChatSalaService } from "app/shared/components/chatspace/chat-obtener-chat-sala.service";

import { Observable } from "rxjs/Observable";
// instancia a la Base de datos

import * as firebase from "firebase";
import { saveAs } from "file-saver/FileSaver";

@Component({
    selector: "app-chatspace",
    templateUrl: "./chatspace.component.html",
    styleUrls: ["./chatspace.component.scss"],
    providers: [ChatObtenerChatSalaService]
})
export class ChatspaceComponent implements OnInit {

    // Variables
    salaElegida: string = "";
    personaLogeada: Persona;
    userName: string = "";
    srcFotoPerfil: string = "";
    srcFoto: string = "";
    fotoNombre: string = "";
    fotoType: string = "";
    fotoFile: string = "";
    message: string = "";
    messages = [];

    // Foto
    busy: Promise<any>;

    //actualizar
    showMenu: string = "";

    //variables botones auxiliares maxinizar, cerrar
    minimizar = false;
    cerrar = true;

    //cargar archivo
    form: FormGroup;

    // referencia a la BDD
    messagesRef: any;

    @ViewChild("refresh") refresh;
    @ViewChild("fileInput") fileInput;

    constructor(
        vcr: ViewContainerRef,
        private fotoPerfilDataService: FotoPerfilService,
        private chatObtenerChatSalaService: ChatObtenerChatSalaService,
        private http: Http,
        public toastr: ToastsManager
        
        
        
    ) {
        this.toastr.setRootViewContainerRef(vcr);
        this.messagesRef = firebase.database().ref("/mensajes");
    }



    ngOnInit() {
        this.checkForMessages();
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
        this.getFotoPerfil();
        this.botonMinimizar();
        this.botonMaximizar();

        this.cerrar = true;
    }
    botonMinimizar() {
        this.minimizar = true;
    }
    botonMaximizar() {
        this.minimizar = false;
    }

    botonCerrar() {
        this.cerrar = true;
    }
    botonAbrir() {
        this.cerrar = false;
    }

    checkForMessages() {
        this.messagesRef.on("value", snap => {
            let data = snap.val();
            this.getMessages();
            if (typeof this.refresh !== 'undefined') {
                this.refresh.nativeElement.click();
            }
        });
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = "0";
        } else {
            this.showMenu = element;
        }
    }

    addAttachFile() {
        this.fileInput.nativeElement.click();
    }

    getFotoPerfil() {
        this.srcFotoPerfil = "assets/images/user.png";
    }

    CodificarArchivo(event) {
        const reader = new FileReader();
        if(event.target.files[0].size>6291456){
            
            this.toastr.warning("El archivo exede los 6MB ", 'Autenticar');

    
        }else{
          if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
              this.fotoNombre = file.name;
              this.fotoType = file.type;
              this.fotoFile = reader.result.toString().split(",")[1];
              this.srcFoto = this.fotoFile;

            };
          }
        }
       
      }



    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get("avatar").setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.toString().split(",")[1]
                });
            };
        }
    }

    processWebImage(event) {
        let reader = new FileReader();
        reader.onload = readerEvent => {
            let imageData = (readerEvent.target as any).result;
        };

        let imagen = reader.readAsDataURL(event.target.files[0]);
    }

    sendMessage() {
        let empty = "";
        if (this.message.trim() === "") {
            this.toastr.warning("No puede enviar un mensaje vacio", 'Autenticar');
            
            this.message = "";
        } else {
            this.salaElegida = JSON.parse(sessionStorage.getItem("enviarSala"));
            let messageRef = firebase
                .database()
                .ref()
                .child("mensajes");
            if (this.fotoType == null) {
                this.fotoType = "image";
                this.fotoNombre = "documento";
            }
            messageRef.push({
                nombre: "" + this.userName,
                mensaje: "" + this.message,
                fecha: "" + Date.now(),

                salaID: this.salaElegida,
                adjunto: "" + this.srcFoto,
                nomDoc: "" + this.fotoNombre,
                tipo: "" + this.fotoType
            });

            this.srcFoto = "";
            this.message = "";
            this.fotoType = "image";
            this.fotoNombre = "";
        }
    }

    getMessages() {
        this.salaElegida = JSON.parse(sessionStorage.getItem("enviarSala"));
        if (this.salaElegida == "nulo") {
            this.cerrar = true;
        } else {
            let messagesRef = firebase
                .database()
                .ref("/mensajes")
                .orderByChild("salaID")
                .equalTo(this.salaElegida + "");

            messagesRef.on("value", snap => {
                let data = snap.val();
                this.messages = [];
             
                  
                for (let key in data) {
                    this.messages.push(data[key]);
                }
                this.messages.reverse();
            });
            this.salaElegida = "";
            this.botonCerrar();
            this.botonAbrir();
        }
    }
    downloadFile(base: string, tipo: string, nomDoc: string) {
        let reader = new FileReader();

        const byteCharacters = atob(base);

        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: tipo + "" });

        saveAs(blob, nomDoc + "");
    }

}
