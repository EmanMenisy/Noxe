import { Call } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TendingmoviesService } from '../tendingmovies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  currentId:number= 0 ;
  movieDetails:any = {}
  mediaType:string = ''
  baseUrl:any = 'https://image.tmdb.org/t/p/original'


  constructor(private _ActivatedRoute:ActivatedRoute , private trendingmovies:TendingmoviesService){
    this.currentId = this._ActivatedRoute.snapshot.params['id']
    this.mediaType = this._ActivatedRoute.snapshot.params['mediaType']
  }

  getdetails(){
    this.trendingmovies
    .getTrendingDetails(this.mediaType ,this.currentId)
    .subscribe((data)=>{this.movieDetails = data})

  }


  ngOnInit():void{
    this.getdetails()
    console.log(this.movieDetails)

  }

}
