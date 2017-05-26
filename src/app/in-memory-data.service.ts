//where the web api accesses data
import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let patients = [
      {id:1, firstname: 'brian', lastname:'mituka', DOB:'09/17/1997', Telephone: 11256, Email: 'mitukab@gmail.com'},
      {id:2, firstname: 'Alex', lastname:'tito', DOB:'09/17/1997', Telephone: 11256, Email: 'mitukab@gmail.com'},
      {id:3, firstname: 'ahmed', lastname:'ali', DOB:'09/17/1997', Telephone: 11256, Email: 'mitukab@gmail.com'},
      {id:4, firstname: 'jackline', lastname:'rapha', DOB:'09/17/1997', Telephone: 11256, Email: 'mitukab@gmail.com'},
      {id:5, firstname: 'james', lastname:'trivor', DOB:'09/17/1997', Telephone: 11256, Email: 'mitukab@gmail.com'}
    ];
    return {patients};
  }


}
