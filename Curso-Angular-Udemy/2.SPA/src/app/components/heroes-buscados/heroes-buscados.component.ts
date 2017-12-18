import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../servicios/heroes.service';


@Component({
  selector: 'app-heroes-buscados',
  templateUrl: './heroes-buscados.component.html'
})
export class HeroesBuscadosComponent implements OnInit {
  //creo la variable donde guardaré los heroes
  heroesBuscados:any;
  //esto lo uso para mostrar lo que se está buscando
  buscando:string;

  constructor(private activateRoute:ActivatedRoute, private _heroesService:HeroesService) {
    //en el constructor se indican los parámetros y poco más por lo general
   }

   //lo que se escribe en el ngOnInit es para que luego ya se mantenga en los ngIf, etc del html
   //por ejemplo para hacer el *ngIf="heroesBuscados.length==0" necesito poner el código en el ngOninit
   //y no en el consturctor ya que como el constructor se ejecuta antes , no capta el html el length
  ngOnInit() {

     //esto sirve porque dentro de aqui puedo coger las variables de la url
     this.activateRoute.params.subscribe( params=>{ 
      //llamo a la funcion buscarHeroes del servicio y le paso como parámetro la variable de la URL
      this.heroesBuscados=this._heroesService.buscarHeroes(params['heroesBuscadosURL']);
      this.buscando=params['heroesBuscadosURL'];

    })
  }

 
}
