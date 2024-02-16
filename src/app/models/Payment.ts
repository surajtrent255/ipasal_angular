import { PaymentMethod } from "./PaymentMethod";

export class Payment {
  paymentId !: number;
  paymentMethodId !: number;
  amount !: number;
  paymentDate !: Date;
  status !: boolean;
  token !: string;
  paymentMethod !: PaymentMethod;
  uniqueOrderIdentifier !: string;
}
