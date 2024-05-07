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
  circleDashArray: number = 283; 
  circleDashOffset: number = 283; 
  targetGlasses: number = 0; 

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.initStorage();
    await this.loadSavedCountdown();
    await this.loadSavedGlassesTaken(); 
    this.loadTargetGlasses();
    this.startTimer();
  }
  async initStorage() {
    await this.storage.create();
  }

 
async loadSavedGlassesTaken() {
  const val = await this.storage.get('glassesTaken');
  if (val !== null) {
    this.glassesTaken = val;
  }
}
  async startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timer = setInterval(async () => {
        if (this.countdown > 0) {
          this.countdown--;
 
          await this.storage.set('countdown', this.countdown);
        } else {
          clearInterval(this.timer);
          this.timerRunning = false;

          this.compareGlassesTakenAndTarget(); 
        }
      }, 1000); 
    }
  }
  
  compareGlassesTakenAndTarget() {
    if (this.countdown <= 0 && this.glassesTaken < this.targetGlasses) {
  
      alert('Oops! You were not able to reach your water intake goal.');
    } else if (this.glassesTaken >= this.targetGlasses) {
      alert('Congratulations! You have successfully reached your water intake goal.');
  
      // Reset the timer and countdown
      this.countdown = 86400; // Reset to 24 hours
      this.startTimer(); // Start the timer again
      this.glassesTaken=0;
      // Clear all storage
      this.storage.clear().then(() => {
        console.log('All storage cleared successfully.');
      }).catch((error) => {
        console.error('Error clearing storage:', error);
      });
      this.router.navigate(['/home']);
    }
  }
  
  async loadSavedCountdown() {
    const val = await this.storage.get('countdown');
    if (val !== null) {
      this.countdown = val;
    }
  }

  loadTargetGlasses() {
    this.storage.get('glassesOfWater').then((val) => {
      if (val !== null) {
        this.targetGlasses = val;
      }
    });
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
    this.storage.set('glassesTaken', this.glassesTaken);
    this.compareGlassesTakenAndTarget();
  }
}