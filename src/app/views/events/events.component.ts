import { Component, OnInit } from '@angular/core';

import { ArenavisionService } from '../../services/arenavision.service';
import { Sport } from '../../models/sport';

@Component({
  selector: 'st-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  busy: Promise<any>;
  sports: Sport[];
  currentSport: Sport;
  constructor(private arenavisionService: ArenavisionService) { }

  ngOnInit() {
    this.busy = this.arenavisionService.getEvents()
      .subscribe(
        data => this.sports = data
      );
  }

  setCurrentSport(sport: Sport) {
    this.currentSport = sport;
  }

}
