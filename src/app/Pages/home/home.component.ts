import { Component, OnInit } from '@angular/core';
import { NewsCategory, category } from 'src/app/Models/Icategory';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: NewsCategory[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

 getCategory() {
  this.categoryService.getcategoryFromJson().subscribe((res: any)=> {
    console.log('res cat', res);
    this.categories = res;
  })
}

}
