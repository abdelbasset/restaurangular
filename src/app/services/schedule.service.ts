import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  search(term): Observable<Object>{
    console.log('Search');
    return this.httpClient.get('assets/schedules.json')
                          .pipe(
                            map(res => res['events'].filter(evt => evt.title.indexOf(term) > -1 )),
                            tap(filteredEvent => console.log('filteredRvent', filteredEvent)),
    );
  }
}
