import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UserService } from "app/core/user.service";
import 'rxjs/add/operator/take';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isLoggedIn().do(
      result => {
        console.log("login state changed on guard! now isLoggedIn = " + result);
        if (!result) {
          this.router.navigateByUrl('login');
        }
      }
    ).take(1)
  }

}
