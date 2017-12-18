import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // poniendo el valor {} me da un error de que el ngfor solo acepta objetos [] aunque funciona igualmente
  public objetos:any[]= [];
  // tslint:disable-next-line:no-inferrable-types
  buscador:string='silla';
  // ofertas=false;
  only_offerts=false;

  constructor( private _dataService: DataService) {

  }
 

  ngOnInit() {
    this.get_Objetos();
  }


  public get_Objetos(){
    this._dataService.postNombreObjeto(this.buscador).subscribe(
      searchProfileResponse => {
        this.objetos=searchProfileResponse;
        console.log(this.objetos);
      },
      error => {
        console.log(error);
      }
    );}
 

    public comprobarOferta(oferta,precio_normal?,precio_rebajado?,precio_segunda_mano?):boolean{
      // no puedo hacer un precio_normal > precio_rebajado , ya que los datos de amazon no son numeros solo
      // porque viene EUR delante asi que no se pueden comparar mayor y menor
        if(precio_normal != precio_rebajado && precio_rebajado != 0){
          return true;
        }else{
          return false;
        }
      }

    // El parametro que recibe esta funcion es el id de la ul a la que cambiare la clase segun
    // si su clase es d-block o d-none
    public mostrarOcultar(value){

      if(document.getElementById(value).className=='d-none'){
        // para añadirle una clase mas seria document.getElementById(value).className += 'd-block';
        // en este caso necesito usar el = no el  +=
        document.getElementById(value).className = 'd-block';
      }else{
        document.getElementById(value).className = 'd-none';
      }
    
   }
}
