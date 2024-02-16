import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from 'src/app/interfaces/IUserLogin';
import {USER_LOGIN_URL } from "src/app/constants/urls"
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { RJResponse } from 'src/app/models/RJResponse';

const USER_KEY = 'User';
const USER_TOKEN = "UserToken";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }



  login(userLogin:IUserLogin):Observable<RJResponse<User>>{
    return this.http.post<RJResponse<User>>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (response) =>{
          console.log("user = == ");
          console.log(response.data);
          console.log("----------------")
          this.setUserToLocalStorage(response.data);
          this.setUserTokenToLocalStorage(response.data.token);
          this.userSubject.next(response.data);
          this.toastrService.success(
            `Welcome to Foodmine ${response.data.fName}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private setUserTokenToLocalStorage(token:string){
    localStorage.setItem(USER_TOKEN, JSON.stringify(token) );
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }

}
