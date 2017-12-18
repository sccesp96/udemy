import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  // los : es el return
  transform(value: any[]) : string {
    // //hago que si no tiene parametro devuelva la foto noimage
    if(!value){
     return "assets/img/noimage.png";
    }

    //el ? es reutrn value [1].url y el : es si no devuelve assets...
    // return ( value.length>0 ) ? value[1].url : "assets/img/noimage.png"  ;
    //lo anterior es lo mismo que lo siguiente
   else if(value.length>0){
      return value[1].url;
    }
    else{
      return "assets/img/noimage.png";
    }
  }

}
