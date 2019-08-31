import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  search(terme): Observable<Object>{
    console.log('Search');
    return this.httpClient.get('assets/schedules.json');
  }
}
