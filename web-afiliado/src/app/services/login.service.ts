import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }




  public loguearse(email:string,password:string){

        // CON POST SOLO ACEPTA COMO RESPUESTAS JSON , ya que el post no tiene el parametro responseType
        // PARA CAMBIAR LAS RESPUESTAS QUE ACEPTA pero el post no muestra los parametros al mirar el network con el f12


          let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
          const parametros_post = 'email='+email + '&password='+password;
          
          return this.http.post('http://localhost:3001/api/signin', parametros_post , {headers : headers},)
          // el :any lo uso par decirle que puede ser de cualquier tipo y qe no me de error al poner el.items.item
          .map((response:any) => {
            return response;
          }
        );


        // CON GET ACEPTA DIFERENTES TIPOS DE RESPUESTA , NO SOLO JSON YA QUE TIENE EL PARAMETRO responseType
        // pero el get muestra los parametros al mirar el network con el f12
         
        // let url = `http://localhost/prueba-modalLogin/prueba-form-angular.php?email=${email}&password=${password}`;

        // return (
        //   this.http
        //     .get(url,{responseType: 'text'})
        //     // el .map convierte la respuesta del http get en un objeto y la variable respuesta que
        //     // creo es la respuesta del map que lo convierte a objeto
        //     .map((respuesta: any) => {
        //       return respuesta;
        //     })
        // );
    
  }


  public comprobarUsuario(email:string){
    
            // CON POST SOLO ACEPTA COMO RESPUESTAS JSON , ya que el post no tiene el parametro responseType
            // PARA CAMBIAR LAS RESPUESTAS QUE ACEPTA pero el post no muestra los parametros al mirar el network con el f12
    
    
              let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
              const parametros_post = 'email='+email ;
              
              return this.http.post('http://localhost:3001/api/comprobarUsuario', parametros_post , {headers : headers},)
              // el :any lo uso par decirle que puede ser de cualquier tipo y qe no me de error al poner el.items.item
              .map((response:any) => {
                return response;
              }
            );
    
      }

}
