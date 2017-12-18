import { RegistroComponent } from './components/registro/registro.component';
import { BodyComponent } from './components/body/body.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
 ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
