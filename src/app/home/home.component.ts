import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HousingLocationComponent, CommonModule],
})
export class HomeComponent {
  title = 'home';
  baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  houseService = inject(HousingService);
  housingLocationList: Observable<Housinglocation[] | undefined>;
  filteredHousingLocationList: Observable<Housinglocation[] | undefined>;

  constructor() {
    this.housingLocationList = this.houseService.getHousingLocationList();
    this.filteredHousingLocationList = this.housingLocationList;
    this.housingLocationList.subscribe(
      (data) => {
        let housingLocations = data!;
        // Accede a las coordenadas
        if (housingLocations.length > 0) {
          console.log(housingLocations[0].coordinates.coordinateX);
        }
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  filter(value: string) {
    this.filteredHousingLocationList = this.housingLocationList.pipe(map(x => x?.filter(i => i.city.toLowerCase()
                                                                                                .includes(value.toLowerCase()))))
    
    console.log(this.filteredHousingLocationList);
  }
}
