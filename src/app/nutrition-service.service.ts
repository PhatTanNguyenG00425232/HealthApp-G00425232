import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = 'https://api.calorieninjas.com/v1/nutrition';
  private apiKey = 'cKhFysIhmyFI0turftpccA==WfO8xOPYipJciSgx'; // Replace 'YOUR_API_KEY' with your actual API key

  constructor(private http: HttpClient) { }

  getNutritionalInfo(query: string): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(`${this.apiUrl}?query=${query}`, { headers });
  }
}
