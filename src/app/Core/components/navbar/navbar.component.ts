import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RouteInfo } from 'src/app/Shared/Models/Menu';


export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home', class: '' },
  { path: '', title: 'About us', class: '' },
  { path: '', title: 'News', class: '' },
  { path: '', title: 'Contact us', class: '' },
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public menuItems: any;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      // console.log('menu items',this.menuItems)
    });
  }


  ngOnInit(): void {
  }

  changeLang(languageType: string) {
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = languageType === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(languageType);
    this.translateService.use(languageType);
    this.changeCssFile(languageType);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";
    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.type = "text/css";
      newLink.id = "langCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
}
