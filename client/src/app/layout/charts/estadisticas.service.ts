import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from './../../../environments/environment';

import 'rxjs/add/operator/toPromise';
@Injectable()

export class EstadisticasService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl;

   constructor(private http: Http) {
   }

   getEstudiantesMatriculados(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/estudiantes_matriculados'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getCuentaEstudiantesCarrera(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/cuenta_estudiantes_carrera'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getCuentaEstudiantesCarreraJornada(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/cuenta_estudiantes_carrera_jornada'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getCuentaEstudiantesCarreraJornadaNivel(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/cuenta_estudiantes_carrera_jornada_nivel'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getEstudiantesSolicitudNoMatriculados(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/estudiantes_solicitud_no_matriculados'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getCuentaSolicitudNoMatriculados(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/cuenta_solicitud_no_matriculados'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getEstudiantesCupoNoSolicitud(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/estudiantes_cupo_no_solicitud'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getCupoNoSolicitud(idPeriodoLectivo: number): Promise<any[]> {
        const url = `${this.urlBase + 'estadisticas/cuenta_cupo_no_solicitud'}`;
        return this.http.get(url + '?idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as any[];
            return toReturn;
        })
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
