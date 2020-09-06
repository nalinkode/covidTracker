
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './shared/error/error404/error404.component';
import { Error500Component } from './shared/error/error500/error500.component';
import { CountriesComponent } from './shared/countries/countries.component';
import { HomeComponent } from './shared/home/home.component';

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
    { 
      path: '500',
      component: Error500Component,
      data: {
        title:'Page-500'
      }
    },
    
    { path: '**', component: Error404Component }
];

export const routing = RouterModule.forRoot(appRoutes);
