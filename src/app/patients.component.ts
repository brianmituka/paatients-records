import { Component, OnInit } from '@angular/core';
import {Patient} from './patient'
import { PatientService } from './patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService]
})
export class PatientsComponent implements OnInit {
  title = 'Patients Records';
  patients: Patient[];
  selectedPatient: Patient;
  constructor(
    private router: Router,
    private patientService: PatientService) { };

  getPatients(): void{
    this.patientService.getPatients().then(patients=> this.patients = patients);
  }
ngOnInit(): void{
  this.getPatients();
}
onSelect(patient: Patient): void{
  this.selectedPatient = patient;
}
//go to a patient's details
gotoDetail(): void{
  this.router.navigate(['/detail', this.selectedPatient.id]);
}
//delete a patient
delete(patient: Patient): void{
  this.patientService
    .delete(patient.id)
    .then(() =>{
      this.patients= this.patients.filter(p => p !== patient);
      if (this.selectedPatient === patient) {this.selectedPatient = null;}
    });
}
//add a patient
add(firstname: string, lastname: string, DOB: string, Telephone: number, Email: string ):void{
  this.patientService.create(firstname, lastname, DOB, Telephone, Email)
    .then(patient => {
      this.patients.push(patient);
      this.selectedPatient = null;
    });
}
}
