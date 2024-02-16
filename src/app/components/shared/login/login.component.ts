import { Component } from '@angular/core';
import {FormGroup, FormControl, FormControlName, Validators} from  "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService} from "../../../service/shared/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    title = "Login Here ";
    isSubmitted = false;
    returnUrl = "";
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })

    constructor(
      private loginService: LoginService,
      private router: Router,
      private activatedRoute:ActivatedRoute){}

    ngOnInit():void{
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    }
    // for validation error messages
    get email(){
      return this.loginForm.get('email');
    }
    get password(){
      return this.loginForm.get("password");
    }

    loginUser(){
      this.isSubmitted = true;
      if(this.loginForm.invalid) return;

      this.loginService.login({ email: this.loginForm.value.email!, password: this.loginForm.value.password!}).subscribe(() => {
           this.router.navigateByUrl(this.returnUrl);
      });
    }


}
