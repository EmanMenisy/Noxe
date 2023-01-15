import { Component, OnInit } from '@angular/core';
import { TendingmoviesService } from './../tendingmovies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  term:string =''
  trendingmovies:any[]=[]
  trendingTv:any[]=[]
  baseUrl:any = 'https://image.tmdb.org/t/p/original'

  constructor(private _trending:TendingmoviesService , private  _NgxSpinnerService:NgxSpinnerService){
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    autoplay :true ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  getMovies(){
    this._NgxSpinnerService.show()
   this._trending.getTrendingMOvies('movie').subscribe((data)=>{
       this.trendingmovies = data.results
    })
    // this._NgxSpinnerService.hide()
  }
  getTvShows(){
   this._trending.getTrendingMOvies('tv').subscribe((data)=>{
       this.trendingTv = data.results
      //  this._NgxSpinnerService.hide()

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this._NgxSpinnerService.hide();
      }, 2000);
    })
  }

  ngOnInit(): void {
    this.getMovies()
    this.getTvShows()
  }
}

