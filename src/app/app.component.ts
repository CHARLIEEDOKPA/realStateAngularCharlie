import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HousingLocationComponent } from "./housing-location/housing-location.component";
import { Housinglocation } from './housinglocation';
import { HousingService } from './housing.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HousingLocationComponent]
})
export class AppComponent {
  
}
