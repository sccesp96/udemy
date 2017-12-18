import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify:string ='https://api.spotify.com/v1/';
  token:string = '';

  constructor(private http: HttpClient) {
    // llamo a la funcion getToken que llama al api php que he hecho donde coge un token de la api de spotify
    // ya que caducan cada hora
    this.getToken();
    
  }
  

  private getToken(){
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
 

    return this.http.get('http://pruebasscc.x10host.com/php/spotify.php', {headers : headers})
    // el :any lo uso par decirle que puede ser de cualquier tipo y qe no me de error al poner el.items.item
    .map((response:any) => {
      return response.access_token;
    }).subscribe(r=>this.token=r);
  }


  private getHeaders() : HttpHeaders {
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer '+this.token 
    });
    
    return headers;
  }
  getArtistas(termino: string) {
    let headers = this.getHeaders();
    
    // es lo mismo
    // let query= `q=${termino}&type=artist`;
    let url = `https://api.spotify.com/v1/search?q=${termino}&type=artist`;

    return (
      this.http
        .get(url, { headers })
        // el .map convierte la respuesta del http get en un objeto y la variable respuesta que
        // creo es la respuesta del map que lo convierte a objeto
        .map((respuesta: any) => {
          this.artistas = respuesta.artists.items;
        })
    );

    // la funcion de flecha es coge la respuesta y ejecuta lo aue hay dentro
  }

  getArtista(id: string) {
    
    
    // es lo mismo
    // let query= `q=${termino}&type=artist`;
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();
    return (
      this.http
        .get(url, { headers })
        // el .map convierte la respuesta del http get en u
        // n objeto y la variable respuesta que creo es la respuesta del map que lo convierte a objeto
        .map((respuesta: any) => {
          // console.log(respuesta);

          return respuesta;
        })
    );

    // la funcion de flecha es coge la respuesta y ejecuta lo aue hay dentro
  }

  getTopTracks(id: string) {
    
    let headers = this.getHeaders();
    
    // es lo mismo
    // let query= `q=${termino}&type=artist`;
    let url = `${this.urlSpotify}artists/${ id }/top-tracks?country=US`;

    return (
      this.http
        .get(url, { headers })
        // uso el any para decirle que la respuesta puede ser de cualquier tipo y no me de error con el .tracks
        .map((respuesta: any) => {
          // console.log(respuesta.tracks);

          return respuesta.tracks;
        })
    );

    // la funcion de flecha es coge la respuesta y ejecuta lo aue hay dentro
  }
}
