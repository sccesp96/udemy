import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InformacionService {

  info: any[]= [];
  // para comprobar cuando se ha cargado por completo la info del servicio
  cargada = false;
  cargada2 = false;
  equipo: any[]= [];

  constructor( public http: Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }


  public carga_info() {
      this.http.get('assets/data/info.pagina.json')
      .subscribe( data => {
        this.cargada = true;
        // sin el .json() lo pasa todo, no solo el body en forma de json que es lo que interesa
        // console.log(data);
        this.info = data.json();
      });
      }

  public carga_sobre_nosotros() {

    this.http.get('https://udemy-angularportfolio.firebaseio.com/equipo.json')
    .subscribe( data => {
      this.cargada2 = true;
      // sin el .json() lo pasa todo, no solo el body en forma de json que es lo que interesa
      // console.log(data);
      this.equipo = data.json();
    });
  }
}
