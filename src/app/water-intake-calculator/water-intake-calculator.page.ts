import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonBackButton, IonButton, IonContent, IonHeader, IonItem, IonSelectOption, IonTitle,IonLabel, IonToolbar, IonInput, IonSelect } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-water-intake-calculator',
  templateUrl: './water-intake-calculator.page.html',
  styleUrls: ['./water-intake-calculator.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent,IonInput, IonHeader, IonTitle,IonSelect, IonToolbar, CommonModule, FormsModule,IonButton,IonBackButton,IonItem,IonSelectOption,IonLabel],
})

export class WaterIntakeCalculatorPage {
  bodyWeight: number;
  age: number;
  gender: string;
  waterIntake: number;
  glassesOfWater: number; // Declare glassesOfWater property

  constructor(private router: Router, private storage: Storage) {
    this.bodyWeight = 0;
    this.age = 0;
    this.gender = '';
    this.waterIntake = 0;
    this.glassesOfWater = 0; // Initialize glassesOfWater property
  }

  ionViewWillEnter() {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    // Retrieve user input data from storage if available
    this.bodyWeight = parseFloat(await this.storage.get('bodyWeight')) || 0;
    this.age = parseFloat(await this.storage.get('age')) || 0;
    this.gender = await this.storage.get('gender') || '';

    // If there's existing input, calculate water intake and glasses of water
    if (this.bodyWeight > 0 && this.age > 0 && this.gender) {
      this.calculateWaterIntake();
    }
  }

  calculateWaterIntake() {
    // Calculate water intake only if all required inputs are available
    if (this.bodyWeight > 0 && this.age > 0 && this.gender) {
      // Calculate minimum water intake based on body weight, age, and gender
      if (this.gender === "male") {
        this.waterIntake = this.bodyWeight * 0.03;
      } else if (this.gender === "female") {
        this.waterIntake = this.bodyWeight * 0.025;
      }
      // Additional calculations based on age or other factors can be added here

      // Round water intake to two decimal places
      this.waterIntake = Math.round(this.waterIntake * 100) / 100;

      // Calculate minimum glasses of water (200ml per glass)
      this.glassesOfWater = Math.ceil(this.waterIntake / 0.2); // 0.2 liters = 200ml

      // Store minimum glasses of water in storage
      this.storage.set('glassesOfWater', this.glassesOfWater);

      // Store user input data in storage
      this.storage.set('bodyWeight', this.bodyWeight);
      this.storage.set('age', this.age);
      this.storage.set('gender', this.gender);
      this.storage.set('waterIntake', this.waterIntake);
    }
  }

  startTimer() {
    // Navigate to the timer page and pass the water intake value
    this.router.navigate(['/timer'], { state: { waterIntake: this.waterIntake } });
  }

  UpdateBodyWeight(event: any) {
    this.bodyWeight = parseFloat(event.target.value);
  }

  UpdateAge(event: any) {
    this.age = parseFloat(event.target.value);
  }

  updateGender(genderValue: string) {
    this.gender = genderValue;
  }
}