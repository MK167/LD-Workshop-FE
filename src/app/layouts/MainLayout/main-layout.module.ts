import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutRoutes } from './main-layout-routing.module'
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../../Pages/home/home.component';
import { CoreModule } from '../../Core/components/core.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent
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
