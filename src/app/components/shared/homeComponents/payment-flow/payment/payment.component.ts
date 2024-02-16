import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { RJResponse } from 'src/app/models/RJResponse';
import { environment } from 'src/environments/environment';
import { CheckoutStages } from '../models/PaymentStages';
import { PaymentService } from '../payment.service';
import { SharedService } from '../shared.service';
// import { KhaltiCheckout } from "khalti-checkout-web";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  public payPalConfig?: IPayPalConfig;

  paymentMethod: string = "";
  paymentMethods = ['ESEWA', "KHALTI", "CASH IN DELIVERY"]
  constructor(private sharedService: SharedService, private paymentService: PaymentService) {

  }
  form = new FormGroup({
    paymentMethod: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

    // this.initConfig();
    // let config = {
    //   // replace this key with yours
    //   "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    //   "productIdentity": "1234567890",
    //   "productName": "Drogon",
    //   "productUrl": "http://gameofthrones.com/buy/Dragons",
    //   "eventHandler": {
    //     onSuccess(payload) {
    //       // hit merchant api for initiating verfication
    //       console.log(payload);
    //     },
    //     // onError handler is optional
    //     onError(error) {
    //       // handle errors
    //       console.log(error);
    //     },
    //     onClose() {
    //       console.log('widget is closing');
    //     }
    //   }
    // };

    // let checkout = new KhaltiCheckout(config);
    // console.log(checkout)
    // let btn = document.getElementById("khalti-btn");
    // console.log(btn)
    // btn.onclick = function () {
    //   checkout.show({ amount: 1000 });
    // }

  }

  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'EUR',
  //     clientId: environment.clientId,
  //     createOrderOnClient: (data) => <ICreateOrderRequest>{
  //       intent: 'CAPTURE',
  //       purchase_units: [{
  //         amount: {
  //           currency_code: 'EUR',
  //           value: '9.99',
  //           breakdown: {
  //             item_total: {
  //               currency_code: 'EUR',
  //               value: '9.99'
  //             }
  //           }
  //         },
  //         items: [{
  //           name: 'Enterprise Subscription',
  //           quantity: '1',
  //           category: 'DIGITAL_GOODS',
  //           unit_amount: {
  //             currency_code: 'EUR',
  //             value: '9.99',
  //           },
  //         }]
  //       }]
  //     },
  //     advanced: {
  //       commit: 'true'
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical'
  //     },
  //     onApprove: (data, actions) => {
  //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //       actions.order.get().then((details: any) => {
  //         console.log('onApprove - you can get full order details inside onApprove: ', details);
  //       });

  //     },
  //     onClientAuthorization: (data) => {
  //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);

  //     },
  //     onError: err => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     }
  //   };
  // }
  get f() {
    return this.form.controls;
  }

  goDeliveryMethod() {
    this.sharedService.changeCheckoutStage(new CheckoutStages(false, false, true, false, false));
  }


  selectPaymentMethod(e: any) {
    let pm = e.target.value;
    this.paymentMethod = pm;

  }
  submit() {
    if (this.paymentMethod === "khalti") {
      // start

      var paylod = {
        "return_url": "http://localhost:4200/paymentSuccedUrl",
        "website_url": "http://localhost:4200",
        "amount": 1300,
        "purchase_order_id": "test12",
        "purchase_order_name": "test",
        "customer_info": {
          "name": "Joshi Hero ",
          "email": "example@gmail.com",
          "phone": "9811496763"
        },
        "amount_breakdown": [
          {
            "label": "Mark Price",
            "amount": 1000
          },
          {
            "label": "VAT",
            "amount": 300
          }
        ],
        "product_details": [
          {
            "identity": "1234567890",
            "name": "Khalti logo",
            "total_price": 1300,
            "quantity": 1,
            "unit_price": 1300
          }
        ]
      }

      console.log("before payment--------------------- ")

      this.paymentService.payByKhalti(paylod).subscribe((data: any) => {
        console.log("data--")
        let payment_url = (data.data.payment_url);
        window.location.href = payment_url;
      }
      )

    }

    else if (this.paymentMethod === "esewa") {
      console.log("esewa");
      // esewa begin
      // esewa ends
    } else if (this.paymentMethod === "cashInHand") {
      console.log("cashInHand");
      this.sharedService.changeCheckoutStage(new CheckoutStages(false, false, false, false, true))

    }
  }


}
