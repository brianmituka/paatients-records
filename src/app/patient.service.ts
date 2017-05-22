import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Patient} from './patient';


@Injectable()
export class PatientService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private patientsUrl = 'api/patients';

  constructor(private http: Http){}
//convert getPatients to Http
  getPatients(): Promise<Patient[]> {
     return this.http.get(this.patientsUrl)
     .toPromise()
     .then(response => response.json().data as Patient[]).catch(this.handleError);
  }
  //get patient by id
  getPatient(id: number): Promise<Patient>{
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get(url)
       .toPromise()
       .then(response => response.json().data as Patient)
       .catch(this.handleError)
  }
//error handling
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
//edit and save a patient
update(patient: Patient): Promise<Patient>{
  const url = `${this.patientsUrl}/${patient.id}`;
  return this.http
     .put(url, JSON.stringify(patient), {headers: this.headers})
     .toPromise()
     .then(() => patient)
     .catch(this.handleError)
}
//delete method
delete(id: number): Promise<void> {
  const url = `${this.patientsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(()=> null)
    .catch(this.handleError);
}
//create a new patient
create(firstname: string, lastname: string, DOB: string, Telephone: number, Email: string ): Promise<Patient> {
  return this.http
    .post(this.patientsUrl, JSON.stringify({firstname: firstname, lastname: lastname, DOB: DOB, Telephone: Telephone, Email: Email}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Patient)
    .catch(this.handleError);
}

}
