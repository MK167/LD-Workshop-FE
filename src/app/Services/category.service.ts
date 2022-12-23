import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../Models/Icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BaseUrl = environment.apiUrl;
  newsCategory = '91298d970c27e9a06518';
  jsonFile = `${environment.jsonFile}news_category-listing.json`


  constructor(private Http: HttpClient) { }

  getcategory(): Observable<category[]> {
    return this.Http
      .get<category[]>(this.BaseUrl + this.newsCategory)
      .pipe(map((objectValue: any) => objectValue.category));
  }

  getcategoryFromJson(): Observable<category[]> {
    return this.Http
      .get<category[]>(this.jsonFile)
      .pipe(map((objectValue: any) => objectValue.newsCategory));
  }
}
