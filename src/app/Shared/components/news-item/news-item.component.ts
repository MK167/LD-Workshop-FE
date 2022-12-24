import { Component, Input, OnInit } from '@angular/core';
import { newsItem } from 'src/app/Models/Inew-items';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem!: newsItem;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails(){
    console.log('news ITEM');
  }
}
