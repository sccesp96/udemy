import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  cargada= false;
  objetos_post:any[]= [];
  
   constructor(private http: HttpClient ) {
  
   }

    public  postNombreObjeto(search:string){

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      const parametros_post = 'msg='+search;

      return this.http.post('http://pruebasscc.x10host.com/php/ama.php', parametros_post , {headers : headers})
      // el :any lo uso par decirle que puede ser de cualquier tipo y qe no me de error al poner el.items.item
      .map((response:any) => {
        this.objetos_post=response.Items.Item;
        return this.objetos_post;
      });
    }



}
