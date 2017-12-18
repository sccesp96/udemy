import { InformacionService } from './../../services/informacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  anyo: number = new Date().getFullYear();

  constructor(_is: InformacionService) {}
}
