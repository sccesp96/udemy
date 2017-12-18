import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // creo la variable donde guardare el formulario
  formulario_login:FormGroup;

  respuesta_login:string;
  
  respuesta_comprobarUsuario:string;

  constructor(private _loginService:LoginService) { }

  ngOnInit() {

  
    this.formulario_login= new FormGroup({
      // el email y el password son los nombres de los campos del formulario que le doy en el html 
      // con el atributo formControlName y con cada campo le tengo que dar un new FormControl
      // el formControl pide varios parametros, el primero el valor inicial, seguno los validadores
      // que pueden ser mas de 1 si se pone en array y el tercero que son los validadores asincronos
      'email' : new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
      'password' : new FormControl('', Validators.required)
      
    });

    
  }

   public loguearse(){
    // creo variables con los valores de los input
     let email= this.formulario_login.controls['email'].value;
     let password = this.formulario_login.controls['password'].value;

    // compruebo que el email es valido por si acaso alguien activa el enable del boton por el f12
    if(this.formulario_login.controls['email'].valid && this.formulario_login.controls['password'].valid){

      this._loginService.loguearse(email,password).subscribe(
        response=>{
          console.log(response);
          this.respuesta_login=response.message;
        },
        error=>{
       this.respuesta_login=error.error.message;
        }
      );

    }
    else{
      console.log('No intentes poner el botón de loguearse en enabled sin los formatos correctos en el input');
    }
  }

  public comprobarUsuario(){
    // creo variables con los valores de los input
     let email= this.formulario_login.controls['email'].value;

    // compruebo que el email es valido por si acaso alguien activa el enable del boton por el f12
    if(this.formulario_login.controls['email'].valid ){

      this._loginService.comprobarUsuario(email).subscribe(
        response=>{
          console.log(response);
          this.respuesta_comprobarUsuario='';
        },
        error=>{
          this.respuesta_comprobarUsuario=error.error.message;
        }
      );

    }
    else{
    }
  }
  
}
