import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainLayoutRoutes } from './main-layout-routing.module'
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../../Pages/home/home.component';
import { CoreModule } from '../../Core/components/core.module';
import { NewsItemComponent } from 'src/app/Shared/components/news-item/news-item.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../../../assets/i18n/", ".json");
}
@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    HttpClientModule,
    RouterModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class MainLayoutModule { }
