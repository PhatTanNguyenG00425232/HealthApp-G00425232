import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityTracker',
  standalone: true
})
export class ActivityTrackerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
