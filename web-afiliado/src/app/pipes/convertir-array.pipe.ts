import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirArray'
})
// Este pipe es necesario ya que el ngFor solo acepta arrays, y en algunos datos devueltos 
// si solo tiene por ejemplo una caracteristica, en vez de ser array es string y da error
export class ConvertirArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // Pipe que comprueba si el value es un string , y si es un string lo convierto en array
    // creando un array nuevo y luego haciendo un push del value y devolviendo eso
    if(typeof(value)=='string'){

      let array=[];
      array.push(value);
      return array;
// si no es un string, significara que el valor es un array, y por lo tanto lo devuelvo igual que viene
  }else{
    return value;
  }

}}
