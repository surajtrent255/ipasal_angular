import { Component } from '@angular/core';
import { RJResponse } from 'src/app/models/RJResponse';
import { ShippingRate } from 'src/app/models/ShippingRate';
import { PaymentFlowService } from 'src/app/service/shared/payment-flow.service';
import Swal from 'sweetalert2';
import { CheckoutStages } from '../models/PaymentStages';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  rate !: number;
  proceedFurther: boolean = false;

  constructor(private paymentFlowService: PaymentFlowService, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(rate => this.rate = rate)
    const select = document.getElementById("cars") as HTMLElement;
  }


  deliveryLocationSelect(data: any) {
    this.paymentFlowService.getShippingRateInfoByLocation(data.target.value).subscribe((res: RJResponse<ShippingRate>) => {
      this.sharedService.changeMessage(res.data.amount)
      this.proceedFurther = true;
    }
    )
  }

  goBillShopMethod() {
    this.sharedService.changeCheckoutStage(new CheckoutStages(false, true, false, false, false));
  }

  goPaymentMethod() {
    if (this.proceedFurther) {
      if (this.rate !== 0 || this.rate !== undefined) {
        localStorage.setItem("DeliveryCharge", JSON.stringify(this.rate))
      }
      this.sharedService.changeCheckoutStage(new CheckoutStages(false, false, false, true, false));
    } else {
      Swal.fire("Interception detected ! ", "you can't proceed further", "warning")
    }

  }

}
