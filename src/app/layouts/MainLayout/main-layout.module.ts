import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutRoutes } from './main-layout-routing.module'
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../../Pages/home/home.component';
import { CoreModule } from '../../Core/components/core.module';
import { NewsItemComponent } from 'src/app/Shared/components/news-item/news-item.component';

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
    CoreModule
  ]
})
export class MainLayoutModule { }
