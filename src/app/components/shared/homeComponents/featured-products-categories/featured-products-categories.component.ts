import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { RJResponse } from 'src/app/models/RJResponse';
import { FeaturedProductCategoriesService } from 'src/app/service/shared/homeService/featured-product-categories.service';

@Component({
  selector: 'app-featured-products-categories',
  templateUrl: './featured-products-categories.component.html',
  styleUrls: ['./featured-products-categories.component.css']
})
export class FeaturedProductsCategoriesComponent {

  featuredCategories: Category[] = [];


  constructor(
    private featuredProdsCatsService: FeaturedProductCategoriesService
  ) {
    let featuredCategoriesObservable: Observable<RJResponse<Category[]>>;
    featuredCategoriesObservable = featuredProdsCatsService.getFeaturedCategories();
    featuredCategoriesObservable.subscribe((featuredCategories) => {
      this.featuredCategories = featuredCategories.data;
    })

  }


}
