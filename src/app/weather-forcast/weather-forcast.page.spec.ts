import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherForcastPage } from './weather-forcast.page';

describe('WeatherForcastPage', () => {
  let component: WeatherForcastPage;
  let fixture: ComponentFixture<WeatherForcastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
