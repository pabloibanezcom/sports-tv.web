import { Component, OnInit } from '@angular/core';

import { ArenavisionService } from '../../services/arenavision.service';

@Component({
  selector: 'st-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels: string[];

  constructor(private arenavisionService: ArenavisionService) {
    this.channels = this.arenavisionService.generateChannelsList(30);
   }

  ngOnInit() {
  }

  goToChannel(channel: string) {
    this.arenavisionService.goToChannel(channel);
  }

}
