import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherData } from './../../../../models/interfaces/WeatherData';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

@Input() weatherDataInput!: weatherData;

minTemperatureIcon = faTemperatureLow;
maxTemperatureIcon = faTemperatureHigh;
humidityIcon = faDroplet;
windIcon = faWind;

}
