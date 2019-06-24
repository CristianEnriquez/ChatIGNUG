import { PersonaService } from 'app/CRUD/persona/persona.service';
import { CargoCarrera } from './../../entidades/CRUD/CargoCarrera';
import { CargoCarreraService } from './../../CRUD/cargocarrera/cargocarrera.service';
import { Persona } from 'app/entidades/CRUD/Persona';
import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MailData } from 'app/entidades/especifico/MailData';
import { MailSenderService } from './mail-sender.service';
import { DestinoMail } from 'app/entidades/especifico/DestinoMail';
import { Carrera } from 'app/entidades/CRUD/Carrera';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';

@Component({
    selector: 'app-mail-sender',
    templateUrl: './mail-sender.component.html',
    styleUrls: ['./mail-sender.component.scss']
})
export class MailSenderComponent implements OnInit {
    busy: Promise<any>;
    mailData: MailData;
    progresoPorcentaje: number;
    mensajesEnviados: number;
    total: number;
    tickTime: number
    tiempoRequerido: string;
    mensajeBarra: string;
    enviando: boolean;
    posiblesDestinos: DestinoMail[];
    destinos: DestinoMail[];
    carreras: Carrera[];
    carreraSeleccionadaCombo: number;
    nivelSeleccionadoCombo: number;
    enviosRealizados: number;
    estadoSeleccionadoCombo: number;
    cordinadores = [];
    alInstitucional: number;
    Comodines = [
        '#nombre1',
        '#nombre2',
        '#apellido1',
        '#apellido2',
        '#carrera',
        '#coordinadorCarrera',
        '#identificacion',
        '#instituto',
        '#nivel',
        '#telefonoCelular',
        '#telefonoDomicilio',
        '#correoElectronicoInstitucional',
        '<img src="url">',
        '<h1></h1>',
        '<strong></strong>'];

    constructor(public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private mailSenderDataService: MailSenderService,
        private carreraDataService: CarreraService,
        private cargoCarreraService: CargoCarreraService,
        private personaService: PersonaService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.mailData = new MailData();
        this.mailData.Mensaje = '';
        this.progresoPorcentaje = 0;
        this.mensajesEnviados = 0;
        this.tiempoRequerido = '';
        this.alInstitucional = 1;
        this.mensajeBarra = '';
        this.enviando = false;
        this.carreraSeleccionadaCombo = 0;
        this.nivelSeleccionadoCombo = 0;
        this.estadoSeleccionadoCombo = 0;
        this.getCarreras();
        this.getCoordinadorCarrera();
    }

    filtroSeleccionado() {
        this.getDestinatarios();
        this.mensajesEnviados = 0;
        this.progresoPorcentaje = 0;
        this.tiempoRequerido = '';
        this.enviando = false;
    }

    getCoordinadorCarrera() {
        this.busy = this.cargoCarreraService.getAll()
        .then(cargosCarrera => {
            cargosCarrera.forEach(cargoCarrera => {
                if(cargoCarrera.idCargo == 3) {
                    this.busy = this.personaService.get(cargoCarrera.idPersona)
                    .then(respuesta => {
                        const nombreCoordinador = respuesta.nombre1 + ' ' + respuesta.nombre2 + ' ' + respuesta.apellido1 + ' ' + respuesta.apellido2;
                        const idCarrera = cargoCarrera.idCarrera;
                        const coordinador = {idCarrera: idCarrera, nombre: nombreCoordinador};
                        this.cordinadores.push(coordinador);
                    })
                    .catch(error => {

                    });
                }
            });
        })
        .catch(error => {

        });
    }

    getDestinatarios() {
        this.busy = this.mailSenderDataService
            .getDestinatarios(this.nivelSeleccionadoCombo, this.carreraSeleccionadaCombo, this.estadoSeleccionadoCombo)
        .then(respuesta => {
            if ( JSON.stringify(respuesta) == 'false') {
                this.destinos = [];
                this.total = 0;
                return;
            }
            this.destinos = respuesta;
            this.destinos.forEach(destino => {
                this.cordinadores.forEach(coordinador => {
                    if(destino.idCarrera == coordinador.idCarrera) {
                        destino.coordinadorCarrera = coordinador.nombre;
                    }
                });
            });
            this.total = this.destinos.length;
        })
        .catch(error => {

        });
    }

    getCarreras() {
        this.busy = this.carreraDataService.getAll()
        .then(respuesta => {
            this.carreras = respuesta;
            this.cuentaMensajesEnviados();
            this.filtroSeleccionado();
        })
        .catch(error => {

        });
    }

    cambioCuerpo() {
        if(this.destinos.length == 0){
            return;
        }
        let cuerpo: string;
        cuerpo = this.mailData.Mensaje;
        document.getElementById('previewBody').innerHTML = this.buildMessageBody(this.destinos[0], cuerpo);
    }

    cuentaEnvios(mensajesPorEnviar: number) {
        this.busy = this.mailSenderDataService.cuentaEnvios()
        .then(respuesta => {
            if ( ((respuesta * 1) + (mensajesPorEnviar * 1)) <= 499 ) {
                this.iniciarEnvio();
            } else {
                this.toastr.warning('El límite diario es de 500 correos electrónicos.', 'Error de envío');
                this.mensajesEnviados = 0;
                this.mensajesEnviados = 0;
                this.progresoPorcentaje = 0;
                this.tiempoRequerido = '';
                this.enviando = false;
            }
        })
        .catch(error => {

        });
    }

    cuentaMensajesEnviados() {
        this.busy = this.mailSenderDataService.cuentaEnvios()
        .then(respuesta => {
            this.enviosRealizados = respuesta;
        })
        .catch(error => {

        });
    }

    insertarComodin(comodin: string) {
        this.mailData.Mensaje += comodin;
    }

    buildMailData(cuenta: number) {
        const destino = this.destinos[cuenta - 1];
        let paraEnviar: MailData;
        paraEnviar = new MailData();
        paraEnviar.ToAlias = destino.nombre1 + ' ' + destino.nombre2 + ' ' + destino.apellido1 + ' ' + destino.apellido2;
        if (this.alInstitucional == 1){
            paraEnviar.ToEmail = destino.correoElectronicoInstitucional;
        }
        else{
            paraEnviar.ToEmail = destino.correoElectronico;
        }
        paraEnviar.Asunto = this.mailData.Asunto;
        paraEnviar.FromAlias = this.mailData.FromAlias;
        paraEnviar.FromClave = this.mailData.FromClave;
        paraEnviar.FromEmail = this.mailData.FromEmail;
        paraEnviar.ReplyAlias = this.mailData.ReplyAlias;
        paraEnviar.ReplyEmail = this.mailData.ReplyEmail;
        let cuerpo: string;
        cuerpo = this.mailData.Mensaje;
        paraEnviar.Mensaje = this.buildMessageBody(destino, cuerpo);
        this.enviarEmail(paraEnviar);
    }

    buildMessageBody(destino: DestinoMail, cuerpo: string) {
        let messageBody = cuerpo;
        if(destino.idGenero == 2){
            messageBody = messageBody.replace('BIENVENIDO', 'BIENVENIDA');
            messageBody = messageBody.replace('Bienvenido', 'Bienvenida');
            messageBody = messageBody.replace('bienvenido', 'bienvenida');
        }
        messageBody = messageBody.replace('#nombre1', destino.nombre1);
        messageBody = messageBody.replace('#nombre2', destino.nombre2);
        messageBody = messageBody.replace('#apellido1', destino.apellido1);
        messageBody = messageBody.replace('#apellido2', destino.apellido2);
        messageBody = messageBody.replace('#carrera', destino.carrera);
        messageBody = messageBody.replace('#coordinadorCarrera', destino.coordinadorCarrera);
        messageBody = messageBody.replace('#identificacion', destino.identificacion);
        messageBody = messageBody.replace('#instituto', destino.instituto);
        const niveles = ['Primer Nivel', 'Segundo Nivel', 'Tercer Nivel', 'Cuarto Nivel', 'Quinto Nivel', 'Sexto Nivel'];
        messageBody = messageBody.replace('#nivel', niveles[destino.nivel - 1]);
        messageBody = messageBody.replace('#telefonoCelular', destino.telefonoCelular);
        messageBody = messageBody.replace('#telefonoDomicilio', destino.telefonoDomicilio);
        messageBody = messageBody.replace('#correoElectronicoInstitucional', destino.correoElectronicoInstitucional);
        return messageBody;
    }

    enviarEmail(datosEnvio: MailData) {
        this.busy = this.mailSenderDataService.sendMail(datosEnvio)
        .then(respuesta => {

        })
        .catch(error => {

        });
    }

    sendMails() {
        if ( !this.enviando ) {
            if ( this.total >= 100 ) {
                this.tickTime = 2000;
            } else {
                this.tickTime = 1000;
            }
            this.mensajesEnviados = 0;
            this.enviando = true;
            this.cuentaEnvios(this.total);
        }
    }

    setProgressBar() {
        this.progresoPorcentaje = (this.mensajesEnviados / this.total) * 100;
        this.mensajeBarra = 'Enviados ' + this.mensajesEnviados + ' de ' + this.total;
    }

    setTiempoRequerido() {
        const totalSegundos = (this.total - this.mensajesEnviados) * (this.tickTime / 1000);
        let horas = 0;
        let minutos = 0;
        let segundos = 0;
        horas = Math.floor(totalSegundos / 3600);
        minutos = Math.floor((totalSegundos - (horas * 3600)) / 60);
        segundos = totalSegundos - (horas * 3600) - (minutos * 60);
        let toReturn = '';
        if (horas > 0 ) {
            toReturn = toReturn + horas.toString() + 'H ';
        }
        if (minutos > 0 ) {
            toReturn = toReturn + minutos + 'm ';
        }
        if (segundos > 0 ) {
            toReturn = toReturn + segundos + 's';
        }
        this.tiempoRequerido = 'Tiempo Requerido: ' + toReturn;
    }

    iniciarEnvio() {
        const cuerpo = this.mailData.Mensaje;
        this.setTiempoRequerido();
        this.setProgressBar();
        if ( this.mensajesEnviados < this.total && this.enviando ) {
            setTimeout(() => {
                this.mensajesEnviados++;
                this.setProgressBar();
                this.setTiempoRequerido();
                this.mailData.Mensaje = cuerpo;
                this.buildMailData(this.mensajesEnviados);
                this.iniciarEnvio();
            }, this.tickTime);
        } else {
            this.toastr.success('Tarea terminada satisfactoriamente.', 'Envio de mensajes');
            this.mensajesEnviados = 0;
            this.mensajesEnviados = 0;
            this.progresoPorcentaje = 0;
            this.tiempoRequerido = '';
            this.enviando = false;
        }
    }
}
