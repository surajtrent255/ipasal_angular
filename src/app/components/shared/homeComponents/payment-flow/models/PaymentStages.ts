export class CheckoutStages {

  constructor(
    public personalStage: boolean = false,
    public shippingStage: boolean = false,
    public deliveryStage: boolean = false,
    public paymentStage: boolean = false,
    public finishStage: boolean = false
  ) {

  }
}
