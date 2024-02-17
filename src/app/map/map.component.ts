import { Coordinates } from './../coordinates';
import { isPlatformBrowser } from '@angular/common';
import { AfterRenderPhase, AfterViewInit, Component, Input, OnInit, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit{

  @Input() coordinates!:Coordinates;


//...
ngAfterViewInit() {
  
 
  setTimeout(() => {
    const map = new Map('map').setView([this.coordinates.coordinateY, this.coordinates.coordinateX], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var mark = marker([this.coordinates.coordinateY, this.coordinates.coordinateX]).addTo(map);
  },2000)

  
}



}
