import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { HttpService } from './http.service';

@Injectable()
export class ArenavisionService {

  private api_url: string;
  private arenavision_url: string;

  constructor(private http: Http, private httpService: HttpService) {
    this.api_url = environment.api_url;
    this.arenavision_url = '';
  }

  getEvents(): any {
    return this.httpService.get('events');
  }

  getAcestremFromChannel(channel: string): any {
    return this.http.get(this.api_url + 'acestream/' + channel)
      .map((response: Response) => response.json());
  }

  goToChannel(channel: string): void {
    this.getAcestremFromChannel(channel)
      .subscribe(
      data => this.openAcestream(data.acestream)
      );
  }

  openAcestream(acestream: string) {
    window.open(acestream);
  }

  generateChannelsList(numberChannels: number) {
    let result = Array<string>();
    for (let i = 1; i <= numberChannels; i++) {
      result.push(i + '');
    }
    return result;
  }

}
