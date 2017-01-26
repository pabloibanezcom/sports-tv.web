import { Component, OnInit, Input } from '@angular/core';

import { Day } from '../../models/day';

@Component({
  selector: 'st-day-show',
  templateUrl: './day-show.component.html',
  styleUrls: ['./day-show.component.scss']
})
export class DayShowComponent implements OnInit {

  @Input() day: Day;

  constructor() { }

  ngOnInit() {
  }

}
