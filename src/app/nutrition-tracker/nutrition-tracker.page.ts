import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonInput,IonLabel,IonText,IonBackButton,IonButton,IonList} from '@ionic/angular/standalone';
import { NutritionService } from '../nutrition-service.service';

@Component({
  selector: 'app-nutrion-tracker',
  templateUrl: './nutrition-tracker.page.html',
  styleUrls: ['./nutrition-tracker.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,IonInput, IonToolbar, CommonModule,IonButton, FormsModule,IonItem,IonLabel,IonList,IonBackButton,IonText]
})
export class NutritionTrackerPage {
  foodQuery: string="";
  nutritionalInfo: any;

  constructor(private nutritionService: NutritionService) {
  }

 

  async getNutritionalInfo() {
    if (this.foodQuery.trim() !== '') {
      console.log('User input:', this.foodQuery); // Log the value
      try {
        const response = await this.nutritionService.getNutritionalInfo(this.foodQuery).toPromise();
        this.nutritionalInfo = response;
      } catch (error) {
        console.error('Error fetching nutritional info:', error);
      }
    } else {
      console.log('foodQuery is empty'); // Log if foodQuery is empty
    }
  }

  updateFoodQuery(event: any) {
    this.foodQuery = event.target.value;
  }
  
}