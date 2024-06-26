import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'activity-tracker',
    loadComponent: () => import('./activity-tracker/activity-tracker.page').then( m => m.ActivityTrackerPage)
  },
  {
    path:'nutrition-tracker',
    loadComponent:()=>import('./nutrition-tracker/nutrition-tracker.page').then((m)=>m.NutritionTrackerPage)
  },
  {
    path: 'water-intake-calculator',
    loadComponent: () => import('./water-intake-calculator/water-intake-calculator.page').then( m => m.WaterIntakeCalculatorPage)
  },
  {
    path: 'timer',
    loadComponent: () => import('./timer/timer.page').then( m => m.TimerPage)
  },
  {
    path: 'weather-forcast',
    loadComponent: () => import('./weather-forcast/weather-forcast.page').then( m => m.WeatherForcastPage)
  },
];
