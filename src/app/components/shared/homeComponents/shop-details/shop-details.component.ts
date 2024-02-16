import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/shared/products.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent {
  detailProduct!: Products;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}
  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    this.productService.getSingleProduct(productId).subscribe((res) => {
      this.detailProduct = res.data[0];
    });
  }
}
