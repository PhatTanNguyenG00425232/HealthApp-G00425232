import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DailyTrackService {

  constructor(public http: HttpClient) { }

  GetDailyData():Observable<any>{
    return this.http.get('/1/user/C2Q43H/activities/date/2024-05-06.json')
  }
}
