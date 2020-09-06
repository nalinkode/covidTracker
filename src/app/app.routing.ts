
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './shared/countries/countries.component';
import { HomeComponent } from './shared/home/home.component';
import {Error404Component} from './shared/error/error404.component';

const appRoutes: Routes = [
     
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'home',
        component: HomeComponent
    },
     {
        path: 'countries',
        component: CountriesComponent
    },
    
    // ERROR 
    { 
      path: '404',
      component: Error404Component,
      data: {
        title:'Page-404'
      }
    },
   
    
    { path: '**', component: Error404Component }
];

export const routing = RouterModule.forRoot(appRoutes);
