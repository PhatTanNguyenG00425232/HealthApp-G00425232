import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyTrackService {
  private apiKey = 'cKhFysIhmyFI0turftpccA==oExuFMLhYmJHTluC';
  private apiUrl = 'https://api.api-ninjas.com/v1/caloriesburned';

  constructor(private http: HttpClient) { }

  
  // Method to get daily tracking data, with an optional query parameter
  GetDailyData(activity: string): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(`${this.apiUrl}?activity=${activity}`, { headers });
  }
}

