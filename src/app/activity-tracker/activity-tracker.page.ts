import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel,IonText,IonBackButton,IonButton } from '@ionic/angular/standalone';
import { DailyTrackService } from '../daily-track.service';
@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.page.html',
  styleUrls: ['./activity-tracker.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,IonButton, FormsModule,IonItem,IonLabel,IonBackButton,IonText]
})
export class ActivityTrackerPage implements OnInit {
  data:any=[]
  constructor(private dailyTrackService:DailyTrackService) {
   }

  ngOnInit() {
    this.dailyTrackService.GetDailyData().subscribe(
      (data)=>{
        this.data = data.Search;
      }
    )
  }

}
