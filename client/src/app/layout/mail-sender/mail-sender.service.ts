import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from './../../../environments/environment';

import 'rxjs/add/operator/toPromise';
import {DestinoMail} from 'app/entidades/especifico/DestinoMail';

@Injectable()

export class MailSenderService {
    private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    private urlBase = environment.apiUrl;

    constructor(private http: Http) {
    }

    cuentaEnvios(): Promise<number> {
        const url = `${this.urlBase + 'mail_sender/cuentaEnvios'}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as number)
            .catch(this.handleError);
    }

    getDestinatarios(nivel: number, idCarrera: number, idEstado: number): Promise<DestinoMail[]> {
        const url = `${this.urlBase + 'destinos_mail/consultar?idEstado=' + idEstado.toString() + '&nivel=' + nivel.toString() + '&idCarrera=' + idCarrera.toString()}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as DestinoMail[])
            .catch(this.handleError);
    }

    getDestinatariosNoMatriculados(idCarrera: number, idEstado: number): Promise<DestinoMail[]> {
        const url = `${this.urlBase + 'destinos_mail/leer_no_matriculados?idEstado=' + idEstado.toString() + '&nivel='
        + '&idCarrera=' + idCarrera.toString()}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as DestinoMail[])
            .catch(this.handleError);
    }

    sendMail(MailData): Promise<any[]> {
        const url = 'http://192.168.20.10/sae2/server/mail_sender/enviar';
        return this.http.post(url, JSON.stringify(MailData))
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    baseUrl(): string {
        return this.urlBase;
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
