import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonBackButton, IonButton, IonContent, IonHeader, IonItem, IonSelectOption, IonTitle,IonLabel, IonToolbar, IonInput, IonSelect } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-water-intake-calculator',
  templateUrl: './water-intake-calculator.page.html',
  styleUrls: ['./water-intake-calculator.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent,IonInput, IonHeader, IonTitle,IonSelect, IonToolbar, CommonModule, FormsModule,IonButton,IonBackButton,IonItem,IonSelectOption,IonLabel],
})

export class WaterIntakeCalculatorPage implements OnInit {
  bodyWeight: number=0;
  age: number=0;
  gender: string="";
  waterIntake: number=0;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  calculateWaterIntake() {
    console.log('User input:',this.gender);
    // Calculate water intake based on body weight, age, and gender
    if (this.gender === "male") {
      this.waterIntake = this.bodyWeight * 0.03;
    } else if (this.gender === "female") {
      this.waterIntake = this.bodyWeight * 0.025;
    }
    // Additional calculations based on age or other factors can be added here

    // Round water intake to two decimal places
    this.waterIntake = Math.round(this.waterIntake * 100) / 100;
  }
  startTimer() {
    // Navigate to the timer page and pass the water intake value
    this.router.navigate(['/timer'], { state: { waterIntake: this.waterIntake } });
  }

  UpdateBodyWeight(event:any){
    this.bodyWeight=event.target.value;

  }
  UpdateAge(event:any){
    this.age=event.target.value;

  }
  updateGender(genderValue: string) {
    this.gender = genderValue;
  }
}
