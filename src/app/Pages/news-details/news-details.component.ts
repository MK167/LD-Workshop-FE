import { Component, OnInit } from '@angular/core';
import { NewsCategory } from 'src/app/Models/Icategory';
import { newsItem } from 'src/app/Models/Inew-items';
import { NewsService } from '../../Services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  categories: NewsCategory[] = [];
  newsItem: newsItem[] = [];

  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {
    this.getallNews();

  }
  getallNews() {
    this.NewsService.getnewsListingFromJson().subscribe((res: any) => {
      this.newsItem = res;
    })
  }

}
