import { RegistroService } from './../../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formulario_registro:FormGroup;
// variable que uso para que si la respuesta del api es usuario creado, me salga un mensaje en el modal de que
// se ha creado el usuario
  usuario_registrado=false;

  pass_coindicen=true;

  constructor(private _registroService:RegistroService) { }

  ngOnInit() {

    this.formulario_registro= new FormGroup({
      // el email y el password son los nombres de los campos del formulario que le doy en el html 
      // con el atributo formControlName y con cada campo le tengo que dar un new FormControl
      // el formControl pide varios parametros, el primero el valor inicial, seguno los validadores
      // que pueden ser mas de 1 si se pone en array y el tercero que son los validadores asincronos
      'email' : new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
      'password' : new FormControl('', Validators.required),
      'repetir_password' : new FormControl('', Validators.required),
      'honeypot' : new FormControl('')
      
      
    });
    
    
  }
  
   public registrarse(){
   
    // creo variables con los valores de los input
     let email:any = this.formulario_registro.controls['email'];
     let password:any = this.formulario_registro.controls['password'];
     let repetir_password:any = this.formulario_registro.controls['repetir_password'];
     let honeypot:any = this.formulario_registro.controls['honeypot'];
     
  
    // compruebo que el email es valido por si acaso alguien activa el enable del boton por el f12
    if(email.valid && password.valid && repetir_password.valid && honeypot.value===''){
  
      if(password.value === repetir_password.value){
        this._registroService.registrarse(email.value,password.value).subscribe(
          response=>{
            if(response.message==='Usuario creado'){
              // pongo la variable en true para que el ngif del html la coja y muestre usuario registrado
              this.usuario_registrado=true;

              // en 3 seg la vuelvo a poner en false para que se puedan volver a  registran , tambien se pondra en false
              // si se cierra el modal por la funcion permitir_registros() de abajo
              setTimeout(() => {
                this.usuario_registrado=false;
              }, 3000);
            }
            
          },
          error=>{
            console.log(error);
          }
        );
    
      }
      else{
        console.log('Las contrasñas no coinciden');
      }
     
    }
    else{
      alert('No intentes poner el botón de loguearse en enabled sin los formatos correctos en el input');
    }
  }

  public comprobarPass(){
    let password:any = this.formulario_registro.controls['password'];
    let repetir_password:any = this.formulario_registro.controls['repetir_password'];

    if(password.value === repetir_password.value){

    this.pass_coindicen=true;

  }else{

    this.pass_coindicen=false;
    
  }
  }

}
