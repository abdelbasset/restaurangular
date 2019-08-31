import { Component, OnInit, Input, InputDecorator, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  @Input()
  user: any;

  @Output()
  zoom = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  displayNumber(){
    this.zoom.emit(this.user.phoneNumber);
  }
}
