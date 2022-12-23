import { Component, OnInit } from '@angular/core';
import { NewsCategory, category } from 'src/app/Models/Icategory';
import { CategoryService } from '../../Services/category.service';
import { NewsService } from '../../Services/news.service';
import { newsItem } from '../../Models/Inew-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: NewsCategory[] = [];
  newsItem: newsItem[] = [];
  newsItemFilter: newsItem[] = [];
  isClicked: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private NewsService: NewsService) { }

  ngOnInit(): void {
    this.getCategory();
    this.getallNews();
  }

  getCategory() {
    this.categoryService.getcategoryFromJson().subscribe((res: any) => {
      this.categories = res;
    })
  }

  searchCategory(category: any) {
    if (category == 1) {
      this.newsItemFilter = this.newsItem.filter(data => data.categoryID == '1')
    }
    else if (category == 2) {
      this.newsItemFilter = this.newsItem.filter(data => data.categoryID == '2')
    }
    else if (category == 3) {
      this.newsItemFilter = this.newsItem.filter(data => data.categoryID == '3')
    }
    else if (category == 4) {
      this.newsItemFilter = this.newsItem.filter(data => data.categoryID == '4')
    }
    else if (category == 5) {
      this.newsItemFilter = this.newsItem.filter(data => data.categoryID == '5')
    }
    else {
      this.newsItemFilter = this.newsItem.filter(data => data.showOnHomepage == 'yes');
    }
  }

  getallNews() {
    this.NewsService.getnewsListingFromJson().subscribe((res: any) => {
      this.newsItem = res;
      this.newsItemFilter = this.newsItem.filter(data => data.showOnHomepage == 'yes');
    })
  }

  getAllNews() {
    this.NewsService.getnewsListingFromJson().subscribe((res: any) => {
      this.newsItemFilter = res;
      this.isClicked = !this.isClicked;
    })
  }
}
