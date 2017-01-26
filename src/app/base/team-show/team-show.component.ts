import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../../models/team';

@Component({
  selector: 'st-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.scss']
})
export class TeamShowComponent implements OnInit {

  logoUrl: string;
  defaultLogoUrl

  @Input() team: Team;
  @Input() away: boolean;

  constructor() {
   }

  ngOnInit() {
    this.logoUrl = '../../../assets/images/logos/teams/' + this.team.country +  '/' + this.team.key + '.png';
  }

  updateUrl(event) {
    this.logoUrl = '../../../assets/images/logos/teams/default.png';
  }

}
