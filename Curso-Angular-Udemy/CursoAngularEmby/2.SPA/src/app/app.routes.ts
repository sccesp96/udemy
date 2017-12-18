import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesBuscadosComponent } from './components/heroes-buscados/heroes-buscados.component';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'heroes', component: HeroesComponent },
//el /:id es el parametro que le pasare por url
{ path: 'heroe/:id', component: HeroeComponent },
{ path: 'heroes-buscados/:heroesBuscadosURL', component: HeroesBuscadosComponent },

{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES,);