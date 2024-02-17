import { Component, inject } from '@angular/core';
import { Housinglocation} from '../housinglocation';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { first, Observable } from 'rxjs';
import { MapComponent } from "../map/map.component";
import { WeatherComponent } from "../weather/weather.component";

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [ReactiveFormsModule, CommonModule, MapComponent, WeatherComponent]
})
export class DetailsComponent {

  house$:Observable<Housinglocation | undefined>
  route = inject(ActivatedRoute)
  housingService =  inject(HousingService)
  applyForm =  new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])
  })

  submitApplication() {
    if(this.applyForm.valid){
      this.housingService.submitApplication(this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '')
    } else {
      alert("The fields are required")
    }
    

  }

  isInvalid(field:string):boolean{
    return this.applyForm.get(field)?.invalid!
  }

  constructor() {
    let id = Number( this.route.snapshot.paramMap.get("id"))
    this.house$ =  this.housingService.getHousingById(id)!;
    this.house$.subscribe(x => console.log(x?.coordinates.coordinateX))
  }


}
