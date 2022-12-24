import { Routes } from '@angular/router';
import { HomeComponent } from '../../Pages/home/home.component';
import { NewsDetailsComponent } from '../../Pages/news-details/news-details.component';

export const MainLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news-details', component: NewsDetailsComponent },
];

