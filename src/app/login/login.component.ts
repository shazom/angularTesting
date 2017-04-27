import { CustomValidators } from './../shared/custom-validators';
import { NotificationService } from './../core/notification.service';
import { DataService } from './../core/data.service';
import { UserService, UserLoginParams } from './../core/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms/";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  statusLabel: string;

  innerhtml: string;

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
      username: [null, Validators.required],
      password: [null, Validators.required],
      sapak: null,

      // address: builder.group({
      //   city: null,
      //   street: null,
      //   phones: builder.array([builder.control(null)])
      // })

    });
  }

  private login(UserLoginParams): void {
    this.loading = true;
    // const phones = <FormArray>this.loginForm.get('address.phones');

    // const obj = {
    //   controls: phones.controls,
    //   length: phones.length,
    //   // control: phones.at(0)
    // }
    if (this.loginForm.get('username').errors != null) {
      console.group('username errors');
      console.log(this.name.errors);
      console.groupEnd;
    } else {
      // this.notificationService.notify({ message: this.loginForm.value });
      console.log(this.loginForm.value);


    }
    // this.dataService.login({ user: this.username.value, pass: this.password.value, sapak: this.sapak.value })
    //   .subscribe(
    //   result => {
    //     const rc = result.rc;

    //     if (rc && rc === 0) {
    //       this.router.navigate(['/main']);
    //     } else {
    //       this.notificationService.notify({ message: result.data[0].Comment });
    //     }
    //   },
    //   error => this.notificationService.notify({ message: error }));

    // this.router.navigate(['/main']);
  }

  loadDefaultData() {
    this.loginForm.setValue({
      username: "testim6",
      password: "testim1",
      sapak: 60000000,
      address: {
        city: 'lod',
        street: 'haprachim'
      }
    })
  }

  addPhone() {
    const phones: FormArray = <FormArray>this.loginForm.get("address.phones");

    phones.controls.push(new FormControl());
  }

  reset() {
    this.loginForm.reset();
  }

  ngOnInit() {
    // this.loginForm.valueChanges.subscribe(value => console.log(JSON.stringify(value)));
    this.statusSubscription = this.loginForm.statusChanges.subscribe(status => console.log(status));
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }



  markPending() {
    this.name.markAsPending({ onlySelf: true });
  }

  get name(): FormControl {
    return <FormControl>this.loginForm.get('username');
  }

  get password(): FormControl {
    return <FormControl>this.loginForm.get('password');
  }

  checkError() {
    // alert(this.loginForm.hasError('required', ['username']))
    this.name.setErrors({ shalom: true });
  }

  loadURL() {
    let a:string;
    this.dataService.loadURL().subscribe(data => {
      let impl = document.implementation;
      let htmlDoc = impl.createHTMLDocument(data);
      console.log(htmlDoc.getElementById('keyboard-state'));
    });

    // console.log(a.includes('txt_userName'));
  }

  get pass() {
    return <FormControl>this.loginForm.get('password');
  }

  toggleStatus() {

   
      
    this.name.disabled ? this.name.enable() : this.name.disable();
    this.pass.disabled ? this.pass.enable() : this.pass.disable();

    this.statusLabel = this.name.disabled ? "לפתוח" : "לסגור";


  }

}
