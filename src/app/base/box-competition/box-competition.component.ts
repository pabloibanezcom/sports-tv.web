import { Component, OnInit, Input } from '@angular/core';

import { Competition } from '../../models/competition';

@Component({
  selector: 'st-box-competition',
  templateUrl: './box-competition.component.html',
  styleUrls: ['./box-competition.component.scss']
})
export class BoxCompetitionComponent implements OnInit {

  @Input() competition: Competition;

  constructor() { }

  ngOnInit() {
  }

  

}
