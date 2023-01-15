import { Component, OnInit } from '@angular/core';
import { TendingmoviesService } from './../tendingmovies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople :any[] =[]
  baseUrl:any = 'https://image.tmdb.org/t/p/original'

constructor(private _TendingmoviesService :TendingmoviesService){}

getpeople(){
  this._TendingmoviesService.getTrendingPeople().subscribe((data)=>{this.trendingPeople = data.results})
}

ngOnInit(): void {
  this.getpeople()
}
}

