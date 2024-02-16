import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/shared/products.service';

@Component({
  selector: 'app-most-bought-product',
  templateUrl: './most-bought-product.component.html',
  styleUrls: ['./most-bought-product.component.css'],
})
export class MostBoughtProductComponent {
  mostBoughtProduct!: Products[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getMostBpughtProducts();
  }

  getMostBpughtProducts() {
    this.productService.getMostBoughtProducts().subscribe((res) => {
      this.mostBoughtProduct = res.data;
    });
  }
}
