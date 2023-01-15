import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TendingmoviesService {
  term:string =''
  baseUrl:any = 'https://image.tmdb.org/t/p/original'

  constructor(private _http:HttpClient){ }


  getTrendingMOviesPageition(mediatype:any , pageNumber:number):Observable<any>{
      return this._http.get(`https://api.themoviedb.org/3/discover/${mediatype}?api_key=3aca1adc39bb7f2f9f9e98a6ddd1821d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }


  getTrendingMOvies(mediatype:any):Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=3aca1adc39bb7f2f9f9e98a6ddd1821d `)
  }

  getTrendingDetails(mediatype:any, id:number):Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=3aca1adc39bb7f2f9f9e98a6ddd1821d&language=en-US`)
  }

  getTrendingPeople():Observable<any>{
   return this._http.get(`https://api.themoviedb.org/3/trending/person/day?api_key=3aca1adc39bb7f2f9f9e98a6ddd1821d`)
  }

  getterm(){
    return this.term
  }

}
