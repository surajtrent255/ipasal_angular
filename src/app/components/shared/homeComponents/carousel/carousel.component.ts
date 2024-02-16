import { Component } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from 'src/app/service/shared/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  carousel!: Carousel[];

  constructor(private carouselSerice: CarouselService) {}

  ngOnInit() {
    this.getCarousel();
  }
  getCarousel() {
    this.carouselSerice.getSliderContent().subscribe((res) => {
      this.carousel = res.data;
    });
  }
}
