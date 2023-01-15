import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { TendingmoviesService } from './../tendingmovies.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit  {
  logginData:boolean=false;
  term:string ='';
constructor(private _AuthService:AuthService ,private _TendingmoviesService:TendingmoviesService ){
}

logOut(){
  this._AuthService.logOut()
}
log(term:any){
 this._TendingmoviesService.term = term;
 console.log(this._TendingmoviesService.term)
}

ngOnInit(): void {
this.log(this.term)
if(this._AuthService.userData.subscribe(()=>{
  if(this._AuthService.userData.getValue()!= null){
    this.logginData = true
  }
  else{
    this.logginData = false
  }
})){

}
}

}
