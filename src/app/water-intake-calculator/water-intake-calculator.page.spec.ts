import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaterIntakeCalculatorPage } from './water-intake-calculator.page';

describe('WaterIntakeCalculatorPage', () => {
  let component: WaterIntakeCalculatorPage;
  let fixture: ComponentFixture<WaterIntakeCalculatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterIntakeCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
