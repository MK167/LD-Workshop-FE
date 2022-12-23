import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../Models/Icategory';
import { News } from '../Models/Inews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BaseUrl = environment.apiUrl;
  newsListing = 'd275425a434e02acf2f7';
  jsonFile = `${environment.jsonFile}news_listing.json`

  constructor(private Http: HttpClient) { }

  getnewsListing(): Observable<News[]> {
    return this.Http
      .get<News[]>(this.BaseUrl + this.newsListing)
      .pipe(map((objectValue: any) => objectValue.News));
  }

  getnewsListingFromJson(): Observable<News[]> {
    return this.Http
      .get<News[]>(this.jsonFile)
      .pipe(map((objectValue: any) => objectValue.News));
  }
}
