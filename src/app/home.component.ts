import { Component, OnInit } from '@angular/core';

import {Patient} from './patient';
import {PatientService} from './patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PatientService]
})
export class HomeComponent implements OnInit {

  patients: Patient[]= [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients()
     .then(patients => this.patients = patients.slice(1,5));
  }

}
