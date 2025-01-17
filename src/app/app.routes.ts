import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultComponent } from './consult/consult.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'consult',
        component: ConsultComponent

    }



];
