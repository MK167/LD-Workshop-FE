import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../Services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // USE The Below Code When uses the NgxSpinner
    this.loaderService.ShowSpinner();
    return next.handle(req).pipe(
      finalize(
        () =>
        this.loaderService.HideSpinner()
        )
    );
  }
}
