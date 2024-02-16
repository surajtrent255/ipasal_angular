import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/shared/products.service';
import { RecentProductsService } from 'src/app/service/shared/recent-products.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css'],
})
export class RecentProductsComponent {
  products!: Products[];
  substractedDate!: string;
  date!: string;

  constructor(private RecentProductService: RecentProductsService) {}

  ngOnInit() {
    this.getAllProduucts();
  }

  getAllProduucts() {
    this.RecentProductService.getRecentProducts().subscribe((res) => {
      this.products = res.data;
      let subDate = new Date();
      subDate.setDate(subDate.getDate() - 45);
      this.substractedDate = subDate.toJSON().slice(0, 10);
      console.log(this.substractedDate);
    });
  }
}
