import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TendingmoviesService } from '../tendingmovies.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit , OnChanges  {
  baseUrl:any = 'https://image.tmdb.org/t/p/original';
  trendingmovies:any[]= [];
  trendingmoviesList:any[]= [];
  @Input() term:string =''
  constructor(private _trndingMovies:TendingmoviesService ,private _NgxSpinnerService:NgxSpinnerService){

   this.term = this._trndingMovies.getterm()
  }
  getpaginatedData(pagenumber:number){
    this._NgxSpinnerService.show()
    this._trndingMovies.getTrendingMOviesPageition('movie', pagenumber).
    subscribe((data)=>{this.trendingmoviesList = data.results;
    this._NgxSpinnerService.hide()
    })
  }

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)

}
  // getAllmovies(){
  //   this._trndingMovies.getTrendingMOvies('movie').subscribe((data)=>{
  //    this.trendingmovies = data.results
  //   })
  // }

  ngOnInit(): void {
  //  this.getAllmovies()
   this.term = this._trndingMovies.getterm()
   this.getpaginatedData(1);
  }




}
