import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//importo el modulo rxjs para los observables, los observables sirven para controlar que si hay un cambio en la base de datos se modifique la respuesta sin tener que actualizar la página, el .map convierte la respuesta en un objeto
import 'rxjs';
//BQCF4dZrgRyESZn18ww_SrmfMNhpbrbPpkrOj_8_ArQHkRa-Q0qMwY6_aWqV1qFr1XsCo_pwcHjcjzJ2ADxDkw
@Injectable()
export class SpotifyService {

  //no hace falta poner los [] tambien funciona con artistas:any;
  artistas:any[] = [];
  urlBusqueda:string ="https://api.spotify.com/v1/search";
  urlArtista:string="https://api.spotify.com/v1/artists/";
  urlTopTracks:string="https://api.spotify.com/v1/artists/";

  constructor(private http:Http) { }

  getArtistas( termino:string ){

    let headers= new Headers();
    headers.append('authorization', 'Bearer BQDhMSIfuzxppR8vprNdOd7CN9m8bSlf6Y5f_SUVUa_xpx3FY0j7lbAYPGZ84gBUUQIxKFk0E8MO6vji_PTtig');
    // es lo mismo
    // let query= `q=${termino}&type=artist`;
    let query= "?q="+termino+"&type=artist";
    let url= "https://api.spotify.com/v1/search"+ query;

    return this.http.get(url,{ headers })
      //el .map convierte la respuesta del http get en un objeto y la variable respuesta que creo es la respuesta del map que lo convierte a objeto 
      .map(respuesta =>{

        this.artistas=respuesta.json().artists.items;

    });

    //la funcion de flecha es coge la respuesta y ejecuta lo aue hay dentro
  }

  getArtista( id:string ){

    let headers= new Headers();
    headers.append('authorization', 'Bearer BQDhMSIfuzxppR8vprNdOd7CN9m8bSlf6Y5f_SUVUa_xpx3FY0j7lbAYPGZ84gBUUQIxKFk0E8MO6vji_PTtig');
    // es lo mismo
    // let query= `q=${termino}&type=artist`;
    let url= this.urlArtista + id;

    return this.http.get(url,{ headers })
      //el .map convierte la respuesta del http get en un objeto y la variable respuesta que creo es la respuesta del map que lo convierte a objeto 
      .map(respuesta =>{

        console.log(respuesta.json());
        
        return respuesta.json()

    });

    //la funcion de flecha es coge la respuesta y ejecuta lo aue hay dentro
  }

  getTopTracks( id:string ){

    let headers= new Headers();
    headers.append('authorization', 'Bearer BQDhMSIfuzxppR8vprNdOd7CN9m8bSlf6Y5f_SUVUa_xpx3FY0j7lbAYPGZ84gBUUQIxKFk0E8MO6vji_PTtig');
    // es lo mismo
    // let query= `q=${termino}&type=artist`;
    let url= this.urlArtista + id +"/top-tracks?country=US";

    return this.http.get(url,{ headers })
      //el .map convierte la respuesta del http get en un objeto y la variable respuesta que creo es la respuesta del map que lo convierte a objeto 
      .map(respuesta =>{

        console.log(respuesta.json().tracks );
        
        return respuesta.json().tracks;

    });

    //la funcion de flecha es coge la respuesta y ejecuta lo aue hay dentro
  }
}
