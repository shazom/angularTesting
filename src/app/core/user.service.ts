import { Result, ResultCodes } from './../shared/result';
import { UserLoginParams } from './user.service';
import { User } from './../shared/user';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

export interface UserLoginParams {
  user: string;
  pass: string;
  sapak: string;
}

@Injectable()
export class UserService {

  constructor(
    private dataService: DataService) {

  }

  public login (params: UserLoginParams) : Result {
    if (params) {
      this.dataService.login (params)
    }

    return { rc: ResultCodes.Error };
  }
}


