import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Merchant } from 'src/app/models/Merchant';
import { Product } from 'src/app/models/Product';
import { Products } from 'src/app/models/products';
import { Review } from 'src/app/models/Review';
import { RJResponse } from 'src/app/models/RJResponse';
import { CartService } from 'src/app/service/cart.service';
import { NavbarService } from 'src/app/service/shared/navbar.service';
import { ProductsService } from 'src/app/service/shared/products.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products!: Products[];

  constructor(
    private productService: ProductsService,
    private navComponentService: NavbarService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getAllProduucts();
  }

  getAllProduucts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res.data;
    });
  }

  merchant!: Merchant[];
  review!: Review[];
  category!: Category[];
  produc!: Product;

  addToCart(itemId: number, price: number) {
    console.log('add to cart is being called ');
    this.productService
      .getSingleProduct(itemId)
      .subscribe((prod: RJResponse<[Product]>) => {
        let products!: [Product];
        let product: Product = prod.data[0];
        product.quantity = 1;
        let availableProducts: number = product.availableItems;

        if (localStorage.getItem('Cart') === null) {
          products = [product];
        } else {
          let cartItems!: [Product];
          cartItems = JSON.parse(localStorage.getItem('Cart')!);
          const itemIndexInCartList: number =
            this.checkIteminLocalStorageCart(itemId);
          if (itemIndexInCartList > -1) {
            if (cartItems[itemIndexInCartList].quantity < availableProducts) {
              cartItems[itemIndexInCartList].quantity += 1;
            }
          } else {
            cartItems.push(product);
          }
          // for (let i = 0; i < cartItems.length; i++) {
          //   if (cartItems[i].productId === itemId) {
          //     if (cartItems[i].quantity < availableProducts)
          //       cartItems[i].quantity = (cartItems[i].quantity + 1);
          //     else
          //       console.log("failure");
          //   }
          //   else {
          //     console.log("Before Push")
          //     console.log(cartItems);
          //     cartItems.push(product);
          //   }
          // }

          products = cartItems;
        }

        localStorage.setItem('Cart', JSON.stringify(products));
        localStorage.setItem(
          'totalPrice',
          JSON.stringify(this.calculateTotalPrice(products))
        );
      });
  }
  checkIteminLocalStorageCart(itemId: number) {
    let cartItems!: [Product];

    if (localStorage.getItem('Cart') !== null) {
      cartItems = JSON.parse(localStorage.getItem('Cart')!);
    }

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].productId == itemId) return i;
    }
    return -1;
  }

  calculateTotalPrice(products: [Product]): string {
    let totalPrice = 0;
    if (products !== null && products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].rate * products[i].quantity;
      }
    }
    return totalPrice as unknown as string;
  }
}
