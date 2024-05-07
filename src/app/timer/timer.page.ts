import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton,IonButtons, IonButton, IonContent, IonHeader, IonItem, IonSelectOption, IonTitle,IonLabel, IonToolbar, IonInput, IonSelect} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonIcon } from '@ionic/angular/standalone';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButton,IonItem,IonSelectOption,IonLabel,IonInput,IonSelect,IonIcon,IonButtons]
})
export class TimerPage implements OnInit {
  countdown: number = 86400; // 24 hours in seconds
  timer: any;
  timerRunning: boolean = false;
  glassesTaken: number = 0;
  circleDashArray: number = 283; // Circumference of a circle with radius 45 (2πr)
  circleDashOffset: number = 283; // Full circumference
  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.initStorage();
    await this.loadSavedCountdown();
    this.startTimer();
  }

  async initStorage() {
    await this.storage.create();
  }

  async startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timer = setInterval(async () => {
        if (this.countdown > 0) {
          this.countdown--;
          // Save the countdown value to storage
          await this.storage.set('countdown', this.countdown);
        } else {
          clearInterval(this.timer);
          this.timerRunning = false;
          // Here, you can add logic to handle what happens when the timer reaches 0
          // For example, navigate to another page or show a message
        }
      }, 1000); // Run the timer every second (1000 milliseconds)
    }
  }

  async loadSavedCountdown() {
    const val = await this.storage.get('countdown');
    if (val !== null) {
      this.countdown = val;
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  goToWaterIntakeCalculator() {
    // Prevent navigation if the timer is running
    if (!this.timerRunning) {
      this.router.navigate(['/water-intake-calculator']);
    }
  }

  addWater() {
    this.glassesTaken++;
  }
}
