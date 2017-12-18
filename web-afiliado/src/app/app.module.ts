import { RegistroService } from './services/registro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

// Import para que no de errores el ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Service
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ConvertirArrayPipe } from './pipes/convertir-array.pipe';
import { ModificarValuePipe } from './pipes/modificarvalue.pipe';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routes';
import { RegistroComponent } from './components/registro/registro.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ModificarValuePipe,
    ConvertirArrayPipe,
    NavbarComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [ DataService,LoginService , RegistroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
