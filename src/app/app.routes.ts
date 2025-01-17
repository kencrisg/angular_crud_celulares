import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultComponent } from './consult/consult.component';
import { CrearCelularComponent } from './crear-celular/crear-celular.component';
import { EditarCelularComponent } from './editar-celular/editar-celular.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'crear-celular', component: CrearCelularComponent },
  { path: 'editar-celular/:id', component: EditarCelularComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Ruta comodín para manejar 404
];
