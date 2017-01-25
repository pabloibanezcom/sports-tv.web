import { Component, OnInit, Input } from '@angular/core';

import { ArenavisionService } from '../../services/arenavision.service';
import { Event } from '../../models/event';

@Component({
  selector: 'st-box-event',
  templateUrl: './box-event.component.html',
  styleUrls: ['./box-event.component.scss']
})
export class BoxEventComponent implements OnInit {

  @Input() event: Event;

  constructor(private arenavisionService: ArenavisionService) { }

  ngOnInit() {
  }

  goToChannel(channel: string) {
    this.arenavisionService.goToChannel(channel);
  }

}
