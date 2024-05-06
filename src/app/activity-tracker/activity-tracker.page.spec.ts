import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityTrackerPage } from './activity-tracker.page';

describe('ActivityTrackerPage', () => {
  let component: ActivityTrackerPage;
  let fixture: ComponentFixture<ActivityTrackerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
