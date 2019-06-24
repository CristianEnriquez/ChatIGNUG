import { Injectable } from '@angular/core';
import { Carrera } from 'app/entidades/CRUD/Carrera'
import {Http, Headers, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

//enviroment
import { environment } from 'environments/environment.prod';
@Injectable()
export class ChatCarrerasService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Carrera[]>(environment.apiUrl+'carrera/leer');
   }

}
