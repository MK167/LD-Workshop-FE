import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../../Services/slider.service';
import { Slide } from 'src/app/Models/Islider';
import { Slides } from '../../../Models/Islider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides: Slide[] = [];
  slidesSorted: any[] =[];
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.getAllSlides();
  }


  getAllSlides(){
    this.sliderService.getSlidesFromJson().subscribe((res: any)=>{
      this.slides = res;
      this.slidesSorted = this.slides.sort((a, b) => a['order'] - b['order']);
      console.log('res = ', this.slidesSorted);

    })
  }
}
