import { stringify } from '@angular/core/src/util';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Carrera } from 'app/entidades/CRUD/Carrera';
import { CarreraService } from 'app/CRUD/carrera/carrera.service';
import { url } from 'inspector';
import { Respuesta } from './respuesta';

@Component({
    selector: 'app-matrices',
    templateUrl: './matrices.component.html',
    styleUrls: ['./matrices.component.scss']
})
export class MatricesComponent implements OnInit {
    busy: Promise<any>;
    carreras: Carrera[];
    idCarrera = 0;
    nivel = 0;
    filtroValido = false;
    urlBase = environment.apiUrl;
    entidades: Respuesta[];
    total = 0;
    entidadSeleccionada: Respuesta;

    constructor(public carreraDataService: CarreraService, private http: Http) {
        this.entidades = [];
    }

    estaSeleccionado(porVerificar): boolean {
        if (this.entidadSeleccionada == null) {
           return false;
        }
        return porVerificar.numeroIdentificacion === this.entidadSeleccionada.numeroIdentificacion;
    }

    onSelect(entidadActual: Respuesta): void {
        this.entidadSeleccionada = entidadActual;
    }

    ngOnInit() {
        this.getCarreras();
    }

    getCarreras() {
        this.carreras = [];
        this.busy = this.carreraDataService.getAll()
        .then(respuesta => {
            this.carreras = respuesta;
        })
        .catch(error => {
        });
    }

    filtroSeleccionado() {
        if (this.idCarrera == 0 || this.nivel == 0) {
            this.filtroValido = false;
            return;
        }
        this.refresh();
        this.filtroValido = true;
    }

    refresh() {
        this.entidades = [];
        const direccion = this.urlBase + 'reporte_matriculados/consultar';
        const data = {idCarrera: this.idCarrera, nivel: this.nivel, foo: Math.random()};
        this.http.post(direccion, JSON.stringify(data))
        .toPromise()
        .then(response => {
            if (JSON.stringify(response.json())=='[0]') {
                this.total = 0;
                return;
            }
            const toReturn = response.json() as Respuesta[];
            this.entidades = toReturn;
            this.total = this.entidades.length;
        })
        .catch(error => {
        });
    }
}
