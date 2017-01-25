import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArenavisionService {

  private api_url: string;
  private arenavision_url: string;

  constructor(private http: Http) {
    this.api_url = 'https://sports-tv-api.herokuapp.com/api/';
    this.arenavision_url = '';
  }

  getEvents(): any {
    return this.http.get(this.api_url + 'acestream/events')
      .map((response: Response) => response.json());
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
