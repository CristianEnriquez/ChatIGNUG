import { Injectable } from '@angular/core';
// importacion de http o httpClient segun la clase
import { HttpClient } from '@angular/common/http';
import {Http, Headers, Response} from '@angular/http';
//inporta la base de datos para obtener los mensajes
import { AngularFireDatabase } from 'angularfire2/database';
//importa la clace persona
import { Persona  } from 'app/entidades/CRUD/Persona';
//enviroment
import { environment } from 'environments/environment.prod';


@Injectable()
export class ChatConsultarSalasService {

  constructor(private http: Http,
    private http2: HttpClient,
      public angularFireDatabase: AngularFireDatabase
      ) { }
      getSalas(id: number) {
        const data = { id: id };   
        return this.http.post(environment.apiUrl+'chat/consultar_salas', JSON.stringify(data)).toPromise().then(
          respuesta => {
           
            return respuesta.json();
          }
        ).catch(
          error => {
            Promise.reject(error.message || error);
          }
        );
        
        
        }
}
