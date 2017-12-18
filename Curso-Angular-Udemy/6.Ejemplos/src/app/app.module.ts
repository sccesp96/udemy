import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClasesComponent } from './components/clases/clases.component';
import { Prueba1Directive } from './directivas/prueba1.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClasesComponent,
    Prueba1Directive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
