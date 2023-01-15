import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  , BehaviorSubject} from 'rxjs';
import { RegisterationInfo } from './registeration-info';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _httpClient:HttpClient , private _router :Router) {
    if(localStorage.getItem('token') != null){
      this.saveUserData()
    }
  }

  registerFun(registerData:RegisterationInfo):Observable<any>
  {
   return this._httpClient.post('https://route-movies-api.vercel.app/signup', registerData )
  }


  loginFun(loginData:RegisterationInfo):Observable<any>
  {
   return this._httpClient.post('https://route-movies-api.vercel.app/signin', loginData )
  }
  saveUserData(){
    let userToken = JSON.stringify(localStorage.getItem('token'));
    let tokenDecode:any = jwt_decode(userToken);
    this.userData.next(tokenDecode)
    console.log(this.userData);
  }

  logOut(){
    localStorage.removeItem('token')
    this.userData.next(null)
    this._router.navigateByUrl('/login')
  }

}
