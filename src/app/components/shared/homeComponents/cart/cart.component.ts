import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/models/about';
import { Product } from 'src/app/models/Product';
import { RJResponse } from 'src/app/models/RJResponse';
import { ShippingRate } from 'src/app/models/ShippingRate';
import { CartService } from 'src/app/service/cart.service';
import { AboutService } from 'src/app/service/shared/about.service';
import { ShippingRateService } from 'src/app/service/shared/shipping-rate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  aboutInfo !: About;
  shippingRateInfo !: ShippingRate;
  cartItems!: Product[];
  preTotal!: number;


  constructor(private aboutService: AboutService,
    private shippingRateService: ShippingRateService,
    private router: Router) {
    this.cartItems = JSON.parse(localStorage.getItem("Cart")!);
    this.preTotal = JSON.parse(localStorage.getItem("totalPrice")!);
    console.log(this.cartItems)
    this.getCartInfo();
  }

  getCartInfo() {
    this.aboutService.getAboutContent().subscribe((data: any) => {
      if (data !== undefined || data.data !== undefined || data.data.length > 0) {
        this.aboutInfo = data.data[0];
      }
    });
    this.shippingRateService.getShippingRateInfoByLocation("kathmandu").subscribe((data: RJResponse<ShippingRate>) => {
      this.shippingRateInfo = data.data;
    });

    let products!: Product[];
    if (localStorage.getItem("Cart") !== null) {
      products = JSON.parse(localStorage.getItem("Cart")!);
    }
    if (products == undefined || products.length <= 0) {
      localStorage.removeItem("Cart");
    }
  }

  decreaseQuantity(itemNumber: number, rate: number, inventoryItems: number) {
    const input = document.getElementById(`qtyOfItem${itemNumber}`) as HTMLInputElement
    let quantity: number = Number(input.value);
    if (quantity <= 1) {
      input.value = String(1);
      updateQuantityPrice(itemNumber, rate, inventoryItems);
    } else {
      quantity -= 1;
      input.value = quantity.toString();
      updateQuantityPrice(itemNumber, rate, inventoryItems);
    }
    this.calculateTotalInitialAmount();
    this.updateCart();
  }

  increaseQuantity(itemNumber: number, rate: number, inventoryItems: number) {
    const input = document.getElementById(`qtyOfItem${itemNumber}`) as HTMLInputElement
    let quantity: number = Number(input.value);
    if (quantity < inventoryItems) {
      input.value = (quantity + 1).toString();
      updateQuantityPrice(itemNumber, rate, inventoryItems);
    } else {
      alert("You have selected maximum number for this particular item");
      updateQuantityPrice(itemNumber, rate, inventoryItems);
    }
    this.calculateTotalInitialAmount();
    this.updateCart();
  }

  removeItemfromCart(_num: number) {
    this.cartItems.splice(_num, 1);
    if (this.cartItems.length <= 0) {
      localStorage.removeItem("Cart");
      localStorage.removeItem("totalPrice")
    } else {
      localStorage.setItem("Cart", JSON.stringify(this.cartItems));
      localStorage.setItem("totalPrice", JSON.stringify(this.calculateTotalPrice()));
    }
    this.router.navigate([`cart`]);
    this.calculateTotalInitialAmount();
  }

  calculateTotalPrice(): number {

    let totalPrice = 0;
    if (this.cartItems !== undefined && this.cartItems.length > 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        totalPrice += this.cartItems[i].rate * this.cartItems[i].quantity;
      }
    }
    return totalPrice;
  }

  calculateTotalInitialAmount() {
    var result = document.getElementsByClassName("totalOfAItem");
    let subtotal = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      let subTotalElement = document.getElementById(`totalOfItem${this.cartItems[i].productId}`) as HTMLElement;
      if (subTotalElement !== null) {
        subtotal += Number(subTotalElement.innerText);
      }
    }
    const preTotalElement = document.getElementById("subTotal") as HTMLElement;
    if (preTotalElement !== null) {
      preTotalElement.innerText = String(subtotal);
      localStorage.setItem("totalPrice", JSON.stringify(subtotal));

    }
    const totalElement = document.getElementById("total") as HTMLElement;
    if (totalElement !== null) {
      totalElement.innerText = String(subtotal + this.shippingRateInfo.amount);
    }
  }

  updateCart() {
    for (let i = 0; i < this.cartItems.length; i++) {
      let productQuantityElement = document.getElementById(`qtyOfItem${this.cartItems[i].productId}`) as HTMLInputElement;
      if (productQuantityElement !== null) {
        this.cartItems[i].quantity = Number(productQuantityElement.value);
      }
    }
    console.log(this.cartItems)
    localStorage.setItem("Cart", JSON.stringify(this.cartItems));
  }

}


function updateQuantityPrice(itemNumber: number, rate: number, inventoryItems: number) {
  const input = document.getElementById(`qtyOfItem${itemNumber}`) as HTMLInputElement
  let quantity: number = Number(input.value);
  if (quantity < inventoryItems) {
    const totalOfItem = document.getElementById(`totalOfItem` + itemNumber) as HTMLInputElement;
    totalOfItem.innerText = (rate * quantity).toString();
  } else {
    const qtyOfItem = document.getElementById(`qtyOfItem` + itemNumber) as HTMLInputElement;
    qtyOfItem.value = inventoryItems.toString();
    const totalOfItem = document.getElementById(`totalOfItem` + itemNumber) as HTMLInputElement;
    totalOfItem.innerText = (inventoryItems * rate).toString();
  }
}


