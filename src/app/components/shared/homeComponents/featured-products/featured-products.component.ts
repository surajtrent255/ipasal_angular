import { Component } from '@angular/core';
import { FeaturedProducts } from 'src/app/models/featured-products';

import { FeaturedProductsService } from 'src/app/service/shared/featured-products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent {
  featuredproducts!: FeaturedProducts[];

  constructor(private FeaturedProductService: FeaturedProductsService) {}

  ngOnInit() {
    this.getAllFeaturedProducts();
  }

  getAllFeaturedProducts() {
    this.FeaturedProductService.getFeaturedProducts().subscribe((res) => {
      this.featuredproducts = res.data.reverse();
    });
  }
}
