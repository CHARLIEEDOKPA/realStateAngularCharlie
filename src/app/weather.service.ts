import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private KEY = "27d3a25fbcbe4e7a8fe193629241602";
  private BASIC_URL = "http://api.weatherapi.com/v1/forecast.json"


  constructor(private httpClient :HttpClient) { }


  getWeatherByCityName(city:string) {
    let url = `${this.BASIC_URL}?key=${this.KEY}&q=${city}`
    return this.httpClient.get<Weather>(url)
  }

}
