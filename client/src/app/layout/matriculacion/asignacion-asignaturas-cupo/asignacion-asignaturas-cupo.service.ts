import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { AsignacionAsignaturaCupo } from 'app/entidades/especifico/Asignacion_Asignatura_Cupo';

@Injectable()

export class AsignacionAsignaturasCupoService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl + 'asignacion_asignaturas_cupo';

   constructor(private http: Http) {
   }

   baseUrl(): string {
       return this.urlBase;
   }

   getAll(idJornada: number, idCarrera: number, idPersona: number): Promise<AsignacionAsignaturaCupo[]> {
        return this.http.get(this.urlBase+'/leer' + '?idCarrera=' + idCarrera + '&idJornada=' + idJornada + '&idPersona=' + idPersona).toPromise().then(response=>response.json() as AsignacionAsignaturaCupo[]).catch(this.handleError);
   }

   getPagina(idJornada: number, idCarrera: number, idPersona: number, pagina: number, tamanoPagina: number): Promise<AsignacionAsignaturaCupo[]> {
      return this.http.get(this.urlBase+'/leer_paginado' + '?pagina=' + pagina + '&registros_por_pagina=' + tamanoPagina + '&idCarrera=' + idCarrera + '&idJornada=' + idJornada + '&idPersona=' + idPersona).toPromise().then(response=>response.json() as AsignacionAsignaturaCupo[]).catch(this.handleError);
   }

   getNumeroPaginas(tamanoPagina: number, idJornada: number, idCarrera: number, idPersona: number): Promise<any> {
      return this.http.get(this.urlBase+'/numero_paginas' + '?registros_por_pagina=' + tamanoPagina + '&idCarrera=' + idCarrera + '&idJornada=' + idJornada + '&idPersona=' + idPersona).toPromise().then(response=>response.json()).catch(this.handleError);
   }

   handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
   }
}
