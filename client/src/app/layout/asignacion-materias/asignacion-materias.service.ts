import { EstudianteAsignacionMateria } from './../../entidades/especifico/EstudianteAsignacionMateria';
import { Asignatura } from 'app/entidades/CRUD/Asignatura';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from './../../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { PeriodoLectivo } from '../../entidades/CRUD/PeriodoLectivo';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable()

export class AsignacionMateriasService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl;

   constructor(private http: Http) {
   }

    getAsignaturasCarrera(idCarrera: number): Promise<Asignatura[]> {
        const url = `${this.urlBase + 'asignacion_materias/getAsignaturasCarrera'}`;
        return this.http.get(url + '?idCarrera=' + idCarrera + '&foo=' + Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as Asignatura[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getAsignaturasMatricula(idMatricula: number): Promise<Asignatura[]> {
        const url = `${this.urlBase + 'asignacion_materias/getAsignaturasMatricula'}`;
        return this.http.get(url + '?idMatricula=' + idMatricula + '&foo=' + Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as Asignatura[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getEstudiantesCarrera(idCarrera: number, idPeriodoLectivo: number): Promise<EstudianteAsignacionMateria[]> {
        const url = `${this.urlBase + 'asignacion_materias/getEstudiantesCarrera'}`;
        return this.http.get(url + '?idCarrera=' + idCarrera + '&idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as EstudianteAsignacionMateria[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getPeriodosLectivos(): Promise<PeriodoLectivo[]> {
        const url = `${this.urlBase + 'asignacion_materias/getPeriodosLectivos'}`;
        return this.http.get(url + '?foo=' + Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PeriodoLectivo[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getAsignaturasTomar(idPersona: number): Promise<Asignatura[]> {
        const url = `${this.urlBase + 'asignacion_materias/getAsignaturasTomar'}`;
        return this.http.get(url + '?idPersona=' + idPersona + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as Asignatura[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    createCupo(idPersona: number, idCarrera: number, idJornada: number, idPeriodoAcademico: number, asignaturasATomar: Asignatura[], asignaturasATomarRegistradas: Asignatura[]): Promise<any> {
        const url = `${this.urlBase + 'asignacion_materias/createCupo'}`;
        const data = {idPersona: idPersona, idCarrera: idCarrera, idJornada: idJornada, idPeriodoAcademico: idPeriodoAcademico, asignaturasATomar: asignaturasATomar, asignaturasATomarRegistradas: asignaturasATomarRegistradas};
        return this.http.post(url,JSON.stringify(data))
        .toPromise()
        .then(response => {
            const toReturn = response.json();
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
