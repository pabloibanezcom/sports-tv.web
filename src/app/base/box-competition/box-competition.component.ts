import { Component, OnInit, Input } from '@angular/core';

import { Competition } from '../../models/competition';

@Component({
  selector: 'st-box-competition',
  templateUrl: './box-competition.component.html',
  styleUrls: ['./box-competition.component.scss']
})
export class BoxCompetitionComponent implements OnInit {

  flagSrc: string;
  logoSrc: string;
  @Input() competition: Competition;

  constructor() { }

  ngOnInit() {
    this.flagSrc = '../../../assets/images/flags/' + this.competition.country + '.png';
    this.logoSrc = '../../../assets/images/logos/competitions/' + this.competition.key + '.png';
 }

}
