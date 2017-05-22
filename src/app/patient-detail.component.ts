import { Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}    from '@angular/router';
import {Location}                  from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {PatientService} from './patient.service'
import {Patient} from './patient'

@Component({
  selector: 'patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
    this.route.params.switchMap((params: Params) => this.patientService.getPatient(+params['id'])).subscribe(patient => this.patient = patient);
  }
  //back button
goBack(): void{
  this.location.back();
}
//save button
save(): void{
  this.patientService.update(this.patient)
   .then(()=> this.goBack());
}

  @Input() patient : Patient;

}
