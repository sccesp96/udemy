import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-css',
  templateUrl: './componente-css.component.html',
  styleUrls: ['./componente-css.component.css']
})
export class ComponenteCssComponent implements OnInit {
  variable:string="Hola colega";
  array1:string[]=["d","da","ffs"];
  tamano='';
  constructor() {
   }

  ngOnInit() {
    // this.crearVariable("holaaaa")
  
  }

 

   crearVariable(par:string){

    if(par==""){
      alert("caborn");
    }else{
      this.array1.push(par);
      this.tamano='';
    }}
     
  

   borrarVariable(par?:string){
    this.array1.pop();

    this.tamano='';


  }

}
