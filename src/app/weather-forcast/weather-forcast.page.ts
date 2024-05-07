import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.page.html',
  styleUrls: ['./weather-forcast.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButton,IonCard,IonCardContent,IonCardHeader]
})
export class WeatherForcastPage implements OnInit {
  weatherInfo: any;
  position: any = "";
  lat: string = "";
  long: string = "";

  constructor(private weatherService: WeatherService,private router: Router) { }

  ngOnInit(): void {
    this.getWeather();
  }

  async getWeather() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      
      // Corrected subscription syntax
      this.weatherService.getWeather(lat, long).subscribe(
        (response) => {
          this.weatherInfo = response;
        },
        (error) => {
          console.error('Error fetching weather:', error);
        }
      );
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }
}
