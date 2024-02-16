import { BillingAddress } from "./BillingAddress";
import { ShippingAddress } from "./ShippingAddress";

export class Address {

  billingAddress: BillingAddress = new BillingAddress;
  shippingAddress: ShippingAddress = new ShippingAddress;
}
