import { InformacionService } from './../../services/informacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  private info;
// Hay que hacerlo así llamandolo directamente desde el constructor ya que creando uan variable en esta clase
// y rellenando la variable de esta clase con la variable que se llama del servicio luego al recargar la pagina sin clicar 
// en ella me daba error y al variable no estaba rellena

  // sin ponerlo public no funciona asi que supongo que sin poner nada , angular por defecto lo pondra en privado
  constructor(  _infoService: InformacionService) {
    this.info = _infoService;
  }

  public getInfo(){
    return this.info.equipo;
  }
  ngOnInit() {
  }

}
