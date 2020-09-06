import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router ,RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CountriesComponent } from './shared/countries/countries.component';
import { HomeComponent } from './shared/home/home.component';
import { routing } from './app.routing';
import { DataServiceService } from './shared/service/data-service.service';


import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule

  ],
  declarations: [
    AppComponent, 
    NavBarComponent,  
    CountriesComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/