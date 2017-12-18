import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any ={};

  constructor(private activateRoute:ActivatedRoute, private _heroesService:HeroesService/*,private router:Router*/) { 
    //en el consturcotr se suelen poner los parametros y poco mas
  }

  ngOnInit() {

     this.activateRoute.params.subscribe( params=>{ 
      // siempr recibe strings
      //obtengo el id pasandole el nombre que le he dado al parametro

      //llamo a la funcion getHeroe del service y le paso como parametro la variable de la url que se llama id
      this.heroe=this._heroesService.getHeroe(params['id']);
    })
  }

  //  volverHeroes(){
  //     this.router.navigate( ['/heroes']);
  // }

 

}
