import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appPrueba1]'
})
export class Prueba1Directive {

  constructor(private el:ElementRef) {
  this.el.nativeElement.style.color="blue";
    
   }

//para pasarle parametros
@Input('appPrueba1') color:string;


@HostListener('mouseenter') mouseEntra(){
  this.el.nativeElement.style.color="red";
}

@HostListener('mouseleave') mouseSale(){
  this.el.nativeElement.style.color=null;
}
}
