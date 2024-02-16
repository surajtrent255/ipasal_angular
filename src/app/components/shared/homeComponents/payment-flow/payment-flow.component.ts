import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { CartComponent } from '../cart/cart.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CheckoutStages } from './models/PaymentStages';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-payment-flow',
  templateUrl: './payment-flow.component.html',
  styleUrls: ['./payment-flow.component.css'],
})
export class PaymentFlowComponent {
  // for breadcumb
  checkoutStages: CheckoutStages = new CheckoutStages();

  // ended
  user: User = new User();
  rate: number = 0;
  cartProducts!: Product[];

  subTotal: number = 0;
  shippingCost: number = 0;
  total: number = 0;

  constructor(private dataService: SharedService) {}

  ngOnInit() {
    this.cartProducts = JSON.parse(localStorage.getItem('Cart')!);
    this.dataService.currentMessage.subscribe(
      (rate) => (this.shippingCost = rate)
    );
    if (this.cartProducts) {
      this.cartProducts.forEach((prod: Product) => {
        this.subTotal += prod.rate * prod.quantity;
      });
    }

    this.dataService.currentCheckoutStage.subscribe(
      (stage) => (this.checkoutStages = stage)
    );
    this.checkoutStages.personalStage = true;
  }

  submitForm() {}
}
