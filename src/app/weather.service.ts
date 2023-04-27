import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeather(city: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=41f72717a5ea4dbc5382b1abc4679dea&units=metric')
  }
}
