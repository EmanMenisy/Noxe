import { Component, OnInit } from '@angular/core';
import { TendingmoviesService } from '../tendingmovies.service';
@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  term:string = " "
  trendingTv:any[]=[]
  baseUrl:any = 'https://image.tmdb.org/t/p/original'
  constructor(private _trendingtv :TendingmoviesService){

  }
  getTvShows(){
    this._trendingtv.getTrendingMOvies('tv').subscribe((data=>{this.trendingTv=data.results}))
  }

ngOnInit(): void {
  this.getTvShows()
}

}
