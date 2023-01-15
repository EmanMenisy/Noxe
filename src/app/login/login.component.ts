import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor( private logindata:AuthService ,private _router:Router ,private _ToastrService:ToastrService){}
  loginForm:FormGroup = new FormGroup({
    'email': new FormControl(null , [Validators.required ,Validators.email]),
    'password': new FormControl(null ,[Validators.required , Validators.pattern(/^[a-z][0-9]{3}$/)]),
  })

  submit(){
    if(this.loginForm.invalid){
      return;
    }
    this.logindata.loginFun(this.loginForm.value).subscribe((data)=>{
      if(data.message == 'success'){
        this._ToastrService.success('Hello', 'Login Successfully!');
        localStorage.setItem('token',data.token)
        this.logindata.saveUserData()
        this._router.navigateByUrl('/home')
      }
      else{
        this._ToastrService.error(data.message, 'Login NOT Successfully!');
      }
    })

  }

  ngOnInit(): void {

  }
}
