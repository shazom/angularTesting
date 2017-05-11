import { CustomValidators } from './../shared/custom-validators';
import { NotificationService } from './../core/notification.service';
import { DataService } from './../core/data.service';
import { UserService, UserLoginParams } from './../core/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms/";
import { Subscription } from "rxjs/Subscription";
import { ResultCodes } from "app/shared/result";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  statusLabel: string;

  innerhtml: string;

  error: string;

  showAllErrors: boolean = false;

  //Controls//
  public loginForm: FormGroup;

  private statusSubscription: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService,
    private notificationService: NotificationService,
    private builder: FormBuilder) {

    this.statusLabel = "לסגור";

    this.loginForm = builder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      sapak: [null, [Validators.required]],

      // address: builder.group({
      //   city: null,
      //   street: null,
      //   phones: builder.array([builder.control(null)])
      // })

    });
  }

  private login(form: FormGroup): void {

    if (form.invalid) {
      this.showAllErrors = true;
    } else {

      this.showAllErrors = false;

      this.loading = true;
      this.userService.login({ user: form.get("username").value, pass: form.get("password").value, sapak: form.get("sapak").value })
        .subscribe(
            result => {
              const rc = result.rc;

              if (rc === ResultCodes.Success) {
                this.error = "";
                this.router.navigate(['/main']);
              } else {
                this.error = result.data[0].Comment || "שגיאה בכניסה למערכת";
              }

              this.loading = false;
        });
    }
  }

  loadDefaultData() {
    this.loginForm.setValue({
      username: "testim6",
      password: "testim1",
      sapak: 60000000,
      
    })
  }


  reset() {
    this.loginForm.reset();
  }

  ngOnInit() {
    // this.loginForm.valueChanges.subscribe(value => console.log(JSON.stringify(value)));
    // this.statusSubscription = this.loginForm.statusChanges.subscribe(status => console.log(status));
  }

  ngOnDestroy() {
    // this.statusSubscription.unsubscribe();
  }

  get usernameControl(): FormControl {
    return <FormControl>this.loginForm.get('username');
  }

  get passwordControl(): FormControl {
    return <FormControl>this.loginForm.get('password');
  }

  get sapakControl() {
    return <FormControl>this.loginForm.get('sapak');
  }

  private isValid(control: FormControl): boolean {
    // console.group("isValid");
    // console.log(control ? !control.touched || control.valid : false);
    // console.log(control.status);
    // console.log(control.errors);
    // console.groupEnd();
    return control.valid || (!control.touched && !this.showAllErrors);
  }

  private getErrorMessage(control: FormControl, title: string): string {
    let res: string = 'שגיאה';
    // console.group("getErrorMessage");
    // console.log(`title -> $(title)`);
    // console.log(this.loginForm.valid);

    if (control.hasError('required')) {
      res = "חובה להזין " + title;
    } else {
      res = "שגיאה בהזנת קלט לשדה " + (title || "");
    }

    return res;
  }
}
