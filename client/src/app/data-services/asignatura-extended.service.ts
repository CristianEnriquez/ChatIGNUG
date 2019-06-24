import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import { Asignatura } from '../entidades/CRUD/Asignatura';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AsignaturaExtendedService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    private urlBase = environment.apiUrl + 'asignaturaextended';

    constructor(private http: Http) {
    }

    baseUrl(): string {
        return this.urlBase;
    }

    getPorDocente(idDocente: number): Promise<Asignatura[]> {
        return this.http.get(this.urlBase + '/leer?idDocente=' + idDocente)
            .toPromise()
            .then(response => response.json() as Asignatura[])
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
