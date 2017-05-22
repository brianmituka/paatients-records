import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
//imports for loading and configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'


import { AppComponent } from './app.component';
import { PatientDetailComponent } from './patient-detail.component';
import { PatientsComponent } from './patients.component';
import {PatientService} from './patient.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailComponent,
    PatientsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //simulates communication with the remote server
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
