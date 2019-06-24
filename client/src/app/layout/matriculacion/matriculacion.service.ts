import { DatosCupo } from './../../entidades/especifico/Datos-Cupo';
import { DatosInstituto } from './../../entidades/especifico/Datos-Instituto';
import { PeriodoLectivoActual } from './../../entidades/especifico/Periodo-Lectivo-Actual';
import { Asignatura } from './../../entidades/CRUD/Asignatura';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from './../../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { PersonaCombo } from 'app/entidades/especifico/PersonaCombo';
import { Roles } from 'app/entidades/CRUD/Roles';
import { Matricula } from 'app/entidades/CRUD/Matricula';
@Injectable()

export class MatriculacionService {
   private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
   private urlBase = environment.apiUrl;

   constructor(private http: Http) {
   }

   getAlumnosMatriculados(idCarrera: number, idJornada: number, idEstadoCupo: number): Promise<PersonaCombo[]> {
        const url = `${this.urlBase + 'alumnos_matriculados/consultar'}`;
        return this.http.get(url + '?idCarrera=' + idCarrera + '&idJornada=' + idJornada + '&idEstadoCupo=' + idEstadoCupo + '&foo='+ Math.random())
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getRolesSecundariosRegistrados(): Promise<Roles[]> {
        const url = `${this.urlBase + 'asignacion_roles_secundarios_roles/consultar' + '?foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as Roles[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getPersonasRolesSecundariosRegistrados(): Promise<PersonaCombo[]> {
        const url = `${this.urlBase + 'asignacion_roles_secundarios_personas/consultar' + '?foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getPersonasRolesSecundariosAdmitidos(): Promise<PersonaCombo[]> {
        const url = `${this.urlBase + 'asignacion_roles_secundarios_no_estudiantes/consultar' + '?foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
    }

   getPersonasSolicitudMatriculaRevisados(): Promise<PersonaCombo[]> {
        const url = `${this.urlBase + 'estudiantes_solicitud_matricula_revisados/consultar' + '?foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
    }

   getPersonasSolicitudMatricula(): Promise<PersonaCombo[]> {
        const url = `${this.urlBase + 'estudiantes_solicitud_matricula/consultar' + '?foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
    }

    getPaginasMatriculaFiltrado(idPersona: number, idCarrera: number, idPeriodoLectivo: number, registros_por_pagina: number): Promise<number> {
        const url = `${this.urlBase + 'datos_estudiantes_matricula/numero_paginas?idPeriodoLectivo= ' + idPeriodoLectivo + '&registros_por_pagina=' + registros_por_pagina + '&idPersona=' + idPersona + '&idCarrera=' + idCarrera + '&foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json();
            return toReturn[0].paginas;
        })
        .catch(this.handleError);
    }

    getMatriculaFiltrado(idPersona: number, idCarrera: number, idPeriodoLectivo: number, pagina: number, registros_por_pagina: number): Promise<Matricula[]> {
        const url = `${this.urlBase + 'datos_estudiantes_matricula/leer_paginado?idPersona=' + idPersona + '&idCarrera=' + idCarrera + '&idPeriodoLectivo=' + idPeriodoLectivo + '&registros_por_pagina=' + registros_por_pagina + '&pagina=' + pagina + '&foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
    }

   getPersonasMatriculadas(idCarrera: number, idPeriodoLectivo: number, idEstadoCupo: number): Promise<PersonaCombo[]> {
        const url = `${this.urlBase + 'alumnos_matriculados/consultar?idEstadoCupo=' + idEstadoCupo + '&idCarrera=' + idCarrera + '&idPeriodoLectivo=' + idPeriodoLectivo + '&foo='+ Math.random()}`;
        return this.http.get(url)
        .toPromise()
        .then(response => {
            const toReturn = response.json() as PersonaCombo[];
            return toReturn;
        })
        .catch(this.handleError);
   }

   getDatosCupo(idPersona: number): Promise<DatosCupo> {
      const url = `${this.urlBase + 'datos_cupo/consultar?idPersona=' + idPersona.toString() + '&foo='+ Math.random()}`;
      return this.http.get(url)
      .toPromise()
      .then(response => {
          const toReturn = (response.json() as DatosCupo[])[0];
          return toReturn;
      })
      .catch(this.handleError);
   }

   getDatosInstituto(idCarrera: number): Promise<DatosInstituto> {
      const url = `${this.urlBase + 'datos_instituto/consultar?idCarrera=' + idCarrera.toString() + '&foo='+ Math.random()}`;
      return this.http.get(url)
      .toPromise()
      .then(response => {
          const toReturn = (response.json() as DatosInstituto[])[0];
          return toReturn;
      })
      .catch(this.handleError);
   }

   getPeriodoLectivoActual(): Promise<PeriodoLectivoActual> {
      const url = `${this.urlBase + 'periodo_lectivo_actual/consultar' + '?foo='+ Math.random()}`;
      return this.http.get(url)
      .toPromise()
      .then(response => {
          const toReturn = (response.json() as PeriodoLectivoActual[])[0];
          return toReturn;
      })
      .catch(this.handleError);
   }

   getAsignaturasMatriculables(identificacion: string): Promise<Asignatura[]> {
      const url = `${this.urlBase + 'asignaturas_matriculables/consultar?identificacion=' + identificacion.toString() + '&foo='+ Math.random()}`;
      return this.http.get(url)
      .toPromise()
      .then(response => {
          const toReturn = response.json() as Asignatura[];
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
