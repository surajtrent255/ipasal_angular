import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/shared/products.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent {
  products!: Products[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.listAllProducts();
  }

  listAllProducts = () => {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      console.log(res.data);
    });
  };
}
