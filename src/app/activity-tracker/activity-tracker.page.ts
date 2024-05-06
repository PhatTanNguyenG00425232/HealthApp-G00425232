import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonRadio,IonList, IonTitle, IonToolbar,IonItem,IonLabel,IonText,IonBackButton,IonButton, IonInput } from '@ionic/angular/standalone';
import { DailyTrackService } from '../daily-track.service';
@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.page.html',
  styleUrls: ['./activity-tracker.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonRadio,IonInput, IonTitle,IonList, IonToolbar, CommonModule,IonButton, FormsModule,IonItem,IonLabel,IonBackButton,IonText]
})
export class ActivityTrackerPage {
  caloriesInfo: any[] = [];
  activity: string = "";

  constructor(private dailyTrackService: DailyTrackService) {}

  async GetDailyData() {
    if (this.activity.trim() !== '') {
      console.log('User input:', this.activity);
      try {
        const response = await this.dailyTrackService.GetDailyData(this.activity).toPromise(); // Convert Observable to Promise
        this.caloriesInfo = response;
      } catch (error) {
        console.error('Error fetching activities info:', error);
      }
    } else {
      console.log('activity is empty');
    }
  }

  updateActivity(event: any) {
    this.activity = event.target.value;
  }
}