import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import { AsistenciaRegistro } from '../../entidades/especifico/Asistencia-Registro';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AsistenciaRegistroService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    private urlBase = environment.apiUrl + 'asistenciaregistro';

    constructor(private http: Http) {
    }

    baseUrl(): string {
        return this.urlBase;
    }

    getAll(idMatriculaAsignatura: number): Promise<AsistenciaRegistro[]> {
        return this.http.get(this.urlBase + '/leer?idMatriculaAsignatura=' + idMatriculaAsignatura)
            .toPromise()
            .then(response => response.json() as AsistenciaRegistro[])
            .catch(this.handleError);
    }

    update(entidadTransporte: AsistenciaRegistro[]): Promise<boolean> {
        const url = `${this.urlBase + '/actualizar'}`;
        return this.http.post(url, JSON.stringify(entidadTransporte))
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
