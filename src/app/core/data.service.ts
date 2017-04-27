import { Result } from './../shared/result';
import { AppConfig } from 'app/app-config.service';
import { UserLoginParams } from './user.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class DataService {

  constructor(
    private http: Http,
    private config: AppConfig
  ) { }

  login(params: UserLoginParams): Observable<Result> {
    // let user, pass, card;
    return this.http
      .post(`${this.config.apiUrl}/login`, { user: params.user, password: params.pass, card: params.sapak })
      .do(data => console.log(JSON.stringify(data)))
      .map((response: Response) => JSON.parse(response.json()) as Result)
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);

    // .do(data => console.log("All: " + JSON.stringify(data)))
    // .map((response: Response) => <Result>response.json().data)

  };

  private handleError(error: Response) {
    return Observable.throw(`שגיאה בגישה לשרת \n ${error.json().Message || ''}`);
  }

  loadURL() {
    return this.http
      .get("http://192.168.24.107")
      // .do(data => console.log(data))
      .map((response: Response) => response.text())
    // .do(data => console.log(data))
  }

  logout() { }



}
