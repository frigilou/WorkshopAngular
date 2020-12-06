import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { coach } from '../Model/coach';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  @Input() coach:coach;
  @Output() requested=new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  OnRequest()
  {
    this.requested.emit(this.coach.id);
  }

}
