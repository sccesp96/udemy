import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  busqueda:string="";

  constructor(public _spotifyService:SpotifyService) { }

  ngOnInit() {
    
  }

  buscarArtista(){
    //el subscribe sirve para devolver el observable la data es el parametro return del getArtistas, le puedo llamar como quiera
    this._spotifyService.getArtistas(this.busqueda).subscribe( 
    // data=> 
    // console.log("Esto es del serarch component:  "+data)
    );
  }


}
