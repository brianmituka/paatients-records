import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {PatientsComponent} from './patients.component';
import {PatientDetailComponent} from './patient-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: PatientDetailComponent},
  {path: 'patients', component: PatientsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
