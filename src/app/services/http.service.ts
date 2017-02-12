import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService {

  private api_url: string;

  constructor(private http: Http, private authService: AuthService) {
    this.api_url = environment.api_url;
  }

  get(url: string) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: this.appendToken(headers) });
    return this.http.get(this.api_url + url, options)
      .map((response: Response) => response.json());
  }

  private appendToken(headers: Headers): Headers {
    let token = this.authService.getToken();
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

}
