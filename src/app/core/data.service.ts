import { Injectable, Inject } from '@angular/core';
import { AppConfig, ServiceName } from 'app/app-config.service';
import { Result } from './../shared/result';
import { UserLoginParams } from './user.service';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";



@Injectable()
export class DataService {

  constructor(
    private config: AppConfig,
    private http: Http,
    private slimLoadingBarService: SlimLoadingBarService
  ) { }

  private get(service: ServiceName, params?: any): Observable<any> {
    // this.slimLoadingBarService.start();
    const url: string = this.getServiceUrl(service);
    const res : Observable<any> = params ? this.http.get(url, params) : this.http.get(url);
    // return res.do(() => { this.slimLoadingBarService.complete()});
    return res;
  }

  private post(service: ServiceName, params: any): Observable<any> {
    // this.slimLoadingBarService.start();
    const url: string = this.getServiceUrl(service);
    return this.http.post(url, params)
      // .do(() => { this.slimLoadingBarService.complete })  ;
  }

  

  login(params: UserLoginParams): Observable<Result> {
    // let user, pass, card;
    return this.post(ServiceName.login, { user: params.user, password: params.pass, card: params.sapak })
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

  getServiceUrl(serviceName: ServiceName) {
    return this.config.getUrl(serviceName);
  }

  logout() { }



}
