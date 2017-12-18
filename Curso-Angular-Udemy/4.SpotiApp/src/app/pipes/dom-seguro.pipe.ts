import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
  constructor(private domSanatizer:DomSanitizer){}
  transform(value: any, url:string): any {
    return this.domSanatizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
