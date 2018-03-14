import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

    forecastUrl = 'assets/data/forecast.json';
  
    constructor(private http: HttpClient) { }
  
    getForecast() {
        return this.http.get(this.forecastUrl);
    }

}
