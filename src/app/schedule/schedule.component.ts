import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { debounceTime, map, tap, switchMap } from 'rxjs/operators';

import { ScheduleService } from '../services/schedule.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl;
  searchTerms$ : Observable<string> = this.searchTerm.valueChanges;
  result = null;
  constructor(private scheduleservices : ScheduleService) { }

  ngOnInit() {
    this.searchTerms$.pipe(
      debounceTime(400),
      switchMap(word => this.scheduleservices.search(word)),
      tap(x=> console.log(x))
    ).subscribe(data=> {this.result = data
    console.log(data)} );
  }

  reverce(word){
    return word.split('').reverse().join('');
    }

}
