import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { MapComponent } from "../map/map.component";

@Component({
    selector: 'app-housing-location',
    standalone: true,
    templateUrl: './housing-location.component.html',
    styleUrl: './housing-location.component.css',
    imports: [RouterLink, MapComponent]
})
export class HousingLocationComponent {
  @Input() house!: Housinglocation;
}
