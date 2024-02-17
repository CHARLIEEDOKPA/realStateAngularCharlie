import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  baseUrl = "http://localhost:3000/locations"
  constructor(private httpClient:HttpClient) { }
 

  getHousingLocationList() {
    return this.httpClient.get<Housinglocation[]>(this.baseUrl);

  }

  submitApplication(firstName: string, lastName: string, email: string) {
    localStorage.setItem("data-user",
    `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`)

  }

  getHousingById(id:number) {
    return this.getHousingLocationList().pipe(map(x => x.find(i => i.id == id)))
  }


}
