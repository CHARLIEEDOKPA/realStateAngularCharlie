import { Component, Input, OnInit, inject } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  

  @Input() city!:string
  weather$!:Observable<Weather>
  weatherService = inject(WeatherService)

  ngOnInit(): void {
    this.weather$ = this.weatherService.getWeatherByCityName(this.city)
    this.weather$.subscribe(x => console.log(x))
  }
  

}
