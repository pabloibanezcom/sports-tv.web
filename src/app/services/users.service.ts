import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { HttpService } from './http.service';

@Injectable()
export class UsersService {

  constructor(private httpService: HttpService) { }

  getEvents(): any {
    return this.httpService.get('users');
  }

  afterError(error: any) {
    this.httpService.afterError(error);
  }

}
