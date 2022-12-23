import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../Models/Icategory';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailsService {
  BaseUrl = environment.apiUrl;
  newsCategory = 'd275425a434e02acf2f7';

  constructor(private Http: HttpClient) { }

  getcategory(): Observable<category[]> {
    return this.Http
      .get<category[]>(this.BaseUrl + this.newsCategory)
      .pipe(map((objectValue: any) => objectValue.category));
  }
}
