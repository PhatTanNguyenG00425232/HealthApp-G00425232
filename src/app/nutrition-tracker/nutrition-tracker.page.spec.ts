import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutritionTrackerPage } from './nutrition-tracker.page';

describe('NutritionTrackerPage', () => {
  let component: NutritionTrackerPage;
  let fixture: ComponentFixture<NutritionTrackerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
