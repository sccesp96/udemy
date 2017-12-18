import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel_movil=false;

  constructor() { }

  ngOnInit() {
    // funcion que comprueba si es movil y si es movil pone la variable de arriba en true,
    // en el html hago un ngif para segun el valor de esa variable mostrar un carousel
    // u otro con menos fotos para que en movil gaste menos datos
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.carousel_movil=true;
   }
    
  }

  

}
