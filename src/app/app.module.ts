import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { TendingmoviesService } from './tendingmovies.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import jwt_decode from "jwt-decode";
import { WatchPipe } from './watch.pipe';
import { SeeMorePipe } from './see-more.pipe';
import { SearchPipe } from './search.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    PeopleComponent,
    DetailsComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavBarComponent,
    TvShowComponent,
    WatchPipe,
    SeeMorePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,



  ],
  providers: [
    TendingmoviesService ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
