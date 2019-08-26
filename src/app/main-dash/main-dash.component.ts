import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 2, rows: 1 },
          { title: 'Burgers', cols: 2, rows: 1 },
          { title: 'Galettes/crêpes', cols: 2, rows: 1 },
          { title: 'Pizza', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1 },
        { title: 'Burgers', cols: 1, rows: 1 },
        { title: 'Galettes/crêpes', cols: 1, rows: 2 },
        { title: 'Pizza', cols: 1, rows: 1 }
      ];
    })
  );

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {}
  ngOnInit(){
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();
  }
}
