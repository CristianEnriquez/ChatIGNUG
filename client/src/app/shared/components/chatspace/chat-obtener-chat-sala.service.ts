import { Injectable } from '@angular/core';
// importacion de http o httpClient segun la clase
import { HttpClient } from '@angular/common/http';
import {Http, Headers, Response} from '@angular/http';
//inporta la base de datos para obtener los mensajes
import { AngularFireDatabase } from 'angularfire2/database';

//enviroment
import { environment } from 'environments/environment.prod';


@Injectable()



export class ChatObtenerChatSalaService{
  constructor(
    //instancia las importaciones
    private http: Http,

     public angularFireDatabase: AngularFireDatabase
    
     ) {     }

    
     // metodo para obtener las salas segun id de la persona logeada
     getPersona(id): Promise<any> {

      let data = {idPersona: id};
    //  return this.http.post('http//localhost/server/chat/consultar_salas', JSON.stringify(data))
      return this.http.post(environment.apiUrl +'chat/consultar_salas', JSON.stringify(data))
      .toPromise().then(
        respuesta => respuesta.json()
      ).catch(
        error => {
          Promise.reject(error.message || error);
        }
      );
    }

 


}
