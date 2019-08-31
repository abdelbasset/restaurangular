import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl;
  searchTerms$ : Observable<string> = this.searchTerm.valueChanges;
  constructor() { }

  ngOnInit() {
    this.searchTerms$.pipe(
      map(x => x.toUpperCase()),
      tap(x => console.log('Aprés Map Uppercase', x)),
      map(uppercased => this.reverce(uppercased)),
      tap(x => console.log('Aprés Map Reverce', x)),
      debounceTime(400),
    ).subscribe(data=>console.log(data));
  }

  reverce(word){
    return word.split('').reverse().join('');
    }

}
