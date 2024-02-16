import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RJResponse } from 'src/app/models/RJResponse';
import { ShippingRate } from 'src/app/models/ShippingRate';
import { PaymentFlowService } from 'src/app/service/shared/payment-flow.service';
import { CheckoutStages } from './models/PaymentStages';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<number>(0.00);
  currentMessage = this.messageSource.asObservable();

  private checkoutStageSource = new BehaviorSubject<CheckoutStages>(new CheckoutStages)
  currentCheckoutStage = this.checkoutStageSource.asObservable();

  changeMessage(message: number) {
    this.messageSource.next(message)
    console.log(this.currentMessage)
  }

  changeCheckoutStage(stage: CheckoutStages) {
    this.checkoutStageSource.next(stage);
  }
}
