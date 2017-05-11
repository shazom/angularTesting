import { Result, ResultCodes } from './../shared/result';
import { UserLoginParams } from './user.service';
import { User } from './../shared/user';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router } from "@angular/router";

export interface UserLoginParams {
  user: string;
  pass: string;
  sapak: string;
}

@Injectable()
export class UserService {

  loggedIn: BehaviorSubject<boolean>;

  constructor(
    private dataService: DataService,
    private router: Router, ) {
    this.loggedIn = new BehaviorSubject<boolean>(this.isTokenExists());
  }

  public login(params: UserLoginParams): Observable<Result> {
    return this.dataService.login(params).do(
      result => {
        const rc = result.rc;

        if (rc == ResultCodes.Success) {
          this.loggedIn.next(true);
          console.log("this.loggedIn.next(true);")
          this.generateToken(result.data);
        } else {
          this.loggedIn.next(false);
          console.log("this.loggedIn.next(false);")
          this.removeToken();
        }
      }
    )
  }

  public isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  private generateToken(data: any) {
    window.localStorage.setItem("token", "123123");
    console.log("token generated");
  }

  private removeToken() {
    window.localStorage.removeItem('token');
    console.log("token removed");
  }

  private isTokenExists(): boolean {
    // console.log("is token exists --> " + window.localStorage.getItem('token'));
    return !!window.localStorage.getItem("token");
  }

  public logout() {
    this.removeToken();
    this.loggedIn.next(false);
    console.log("logout :: this.loggedIn.next(false)");
    this.router.navigateByUrl("login");
  }
}


