import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistroService {

  constructor(private http:HttpClient) { }


  public registrarse(email:string,password:string){
    
            // CON POST SOLO ACEPTA COMO RESPUESTAS JSON , ya que el post no tiene el parametro responseType
            // PARA CAMBIAR LAS RESPUESTAS QUE ACEPTA pero el post no muestra los parametros al mirar el network con el f12
    
              let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
              const parametros_post = 'email='+email + '&password='+password;
              
              return this.http.post('http://localhost:3001/api/signup', parametros_post , {headers : headers},)
              // el :any lo uso par decirle que puede ser de cualquier tipo y qe no me de error al poner el.items.item
              .map((response:any) => {
                return response;
              }
            );
      }
}
