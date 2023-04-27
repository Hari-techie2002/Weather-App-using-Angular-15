import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  temp_max: number = 0;
  temp_min: number = 0;
  humidity: number = 0;
  wind: number = 0;
  summary: string = '';  
  iconURL: string = '';
  cityname: string='chennai';
  city: string = 'Chennai';
  title = 'WeatherApp';


  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getweather(this.city);
    
    this.city = ''; 

  }

  onSubmit() {
    this.getweather(this.city);
    this.cityname=this.city;
    this.city = ''; 
  }
  private getweather(city: string) {
    this.weatherService.getWeather(this.city).subscribe({
     
      next: (res: any) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.temp_max = this.myWeather.main.temp_max;
        this.temp_min = this.myWeather.main.temp_min;
        this.humidity = this.myWeather.main.humidity;
        this.wind = this.myWeather.wind.speed;
        this.summary = this.myWeather.weather[0].main;

        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
   })
  }

}
