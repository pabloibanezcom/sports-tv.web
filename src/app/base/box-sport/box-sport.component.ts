import { Component, OnInit, Input } from '@angular/core';

import { Sport } from '../../models/sport';

@Component({
  selector: 'st-box-sport',
  templateUrl: './box-sport.component.html',
  styleUrls: ['./box-sport.component.scss']
})
export class BoxSportComponent implements OnInit {

  @Input() sport: Sport;

  constructor() { }

  ngOnInit() {
  }


}
