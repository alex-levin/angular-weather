import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
    constructor(weatherService: WeatherService) {
        console.log('in ForecastComponent');
        var forecast = weatherService.getForecast();
        console.log(forecast);
    }

    ngOnInit() {
        console.log('in ForecastComponent ngOnInit');
    }

}
