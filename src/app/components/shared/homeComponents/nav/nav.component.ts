import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/service/shared/category.service';
import { FeaturedProductCategoriesService } from 'src/app/service/shared/homeservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  category!: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res.data;
      console.log(res.data);
    });
  }

  cartItemsCount: number = 5;

  updateCartItemsCount(action: string) {
    if (action === 'INC') {
      this.cartItemsCount++;
    }
  }
}
