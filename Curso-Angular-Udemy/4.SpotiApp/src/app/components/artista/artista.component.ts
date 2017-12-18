import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';




@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {
  //lo pongo = {} porque si no no funciona al cogerlo, creo que es porque es un objeto no un array de objetos
  artista:any={};
  //no hace falta poner los [] tambien funciona con canciones:any;
  canciones:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,private _spotifyService:SpotifyService/*, private router:Router*/) {

   }

  ngOnInit() {
    //el map convierte lo que sea en un objeto
    
    this.activatedRoute.params.map(
      //la funcion de flecha en una sola linea hace directamente el return, esto seria un return respuesta['id']
      respuesta =>{ 

        return respuesta['id']}
      //el .subscribe crea el observador que hace que al realizarse cualquier cambio lo notifica instantaneamente sin tener que reloguear por lo tanto hace que si se modifica el id se notifique sin tener que reloguear
    ).subscribe( id =>{
      //llamo a la funcion getArtista pasandole el id del parametro y que tiene un observador que notificará en cuanto se modifique y por lo tanto esta variable cambiará si se cambian los datos de la bd y no esperará a que se relogue la página para obtener el nuevo id 
      this._spotifyService.getArtista(id).subscribe( respuesta => this.artista=respuesta);
      this._spotifyService.getTopTracks(id).subscribe( respuesta => this.canciones=respuesta);
      
      //hago un subscribe tmb del getArtista ya que tmb el token que se recibe es una promesa y puede cambiar y es diferente al id que se le pasa por parámetro
    })

    console.log(this.artista);
    console.log(this.canciones);
  }


//Para hacerlo con un boton en vez de con un a
  //  returnSearch(){
  //   this.router.navigate(['/search']);
  // }

  
}

