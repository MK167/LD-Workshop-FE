import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slide, Slides } from '../Models/Islider';
@Injectable({
  providedIn: 'root'
})
export class SliderService {

  BaseUrl = environment.apiUrl;
  Slides = 'fee177346e7875554413';
  jsonFile = `${environment.jsonFile}banner.json`

  constructor(private Http: HttpClient) { }

  getSlides(): Observable<Slides[]> {
    return this.Http
      .get<Slides[]>(this.BaseUrl + this.Slides)
      .pipe(map((objectValue: any) => objectValue.slides));
  }

  getSlidesFromJson(): Observable<Slides[]> {
    return this.Http
      .get<Slides[]>(this.jsonFile)
      .pipe(map((objectValue: any) => objectValue.slides));
  }

}
