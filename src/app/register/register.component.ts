import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

registerForm:FormGroup = new FormGroup({
  'first_name': new FormControl(null , [Validators.required ,Validators.minLength(3) , Validators.maxLength(10)]),
  'last_name': new FormControl(null, [Validators.required ,Validators.minLength(3) , Validators.maxLength(10)]),
  'email': new FormControl(null , [Validators.required ,Validators.email]),
  'password': new FormControl(null ,[Validators.required , Validators.pattern(/^[a-z][0-9]{3}$/)]),
  'age': new FormControl(null, [Validators.required ,Validators.min(20) , Validators.max(50)])

})

submit(){
  if(this.registerForm.invalid){
    return;
  }
  this._AuthService.registerFun(this.registerForm.value).subscribe((data)=>{
    if(data.message  == 'success'){
      this._router.navigateByUrl("/login")
    }
    else{
      alert('already exist')
    }
    console.log(data)
  })

}
  constructor(private _AuthService:AuthService ,private _router:Router){

  }

  ngOnInit():void{

  }

}

