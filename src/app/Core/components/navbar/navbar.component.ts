import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInfo } from 'src/app/Shared/Models/Menu';


export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home', class: '' },
  { path: '', title: 'About us', class: '' },
  { path: '', title: 'News',  class: '' },
  { path: '', title: 'Contact us',  class: '' },
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public menuItems: any;

  constructor(private router: Router) {
    console.log('44',this.menuItems)
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      console.log('45',this.menuItems)
    });
  }


  ngOnInit(): void {
  }

}
