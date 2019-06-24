import {Persona} from './../../entidades/CRUD/Persona';

import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from './../../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ContactoEstudiantesNuevosService {
    private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    private urlBase = environment.apiUrl + 'estudiantes_no_contactados';

    constructor(private http: Http) {
    }

    contactado(id: number): Promise<any[]> {
        return this.http.get(this.urlBase + '/contactado' + '?id=' + id).toPromise().then(response => response.json() as any[]).catch(this.handleError);
    }

    getAll(idCarrera: number): Promise<Persona[]> {
        return this.http.get(this.urlBase + '/leer' + '?idCarrera=' + idCarrera).toPromise().then(response => response.json() as Persona[]).catch(this.handleError);
    }

    getPagina(pagina: number, tamanoPagina: number, idCarrera: number): Promise<Persona[]> {
        return this.http.get(this.urlBase + '/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina + '&idCarrera=' + idCarrera + '&foo=' + Math.random()).toPromise().then(response => response.json() as Persona[]).catch(this.handleError);
    }

    getNumeroPaginas(tamanoPagina: number, idCarrera: number): Promise<any> {
        return this.http.get(this.urlBase + '/numero_paginas' + '?registros_por_pagina=' + tamanoPagina + '&idCarrera=' + idCarrera).toPromise().then(response => response.json()).catch(this.handleError);
    }

    baseUrl(): string {
        return this.urlBase;
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
