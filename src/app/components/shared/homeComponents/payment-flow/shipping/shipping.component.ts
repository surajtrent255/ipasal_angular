import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/Address';
import { BillingAddress } from 'src/app/models/BillingAddress';
import { ShippingAddress } from 'src/app/models/ShippingAddress';
import Swal from 'sweetalert2';
import { CheckoutStages } from '../models/PaymentStages';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  isShippinAddrEqualBillAddr: boolean = false;
  // shippingAddressInfo !: ShippingAddress;
  // billingAddressInfo !: BillingAddress;
  addressInfo: Address = new Address

  isShippinAddrEqualBillAddrChange(isChecked: boolean) {
    this.isShippinAddrEqualBillAddr = !isChecked;
  }

  constructor(private formbuilder: FormBuilder, private sharedService: SharedService) {

  }

  ngOnInit() {
    let prevAddrInfo = JSON.parse(localStorage.getItem("AddressInfo")!);
    if (prevAddrInfo !== null) {
      this.addressInfo = prevAddrInfo;
      this.loadApiData();
    }
  }


  // addressInfoForm = new FormGroup({
  //   billingAddressInfo: new FormGroup({
  //     email: new FormControl(""),
  //     phone: new FormControl(""),
  //     street: new FormControl(""),
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     zipCode: new FormControl("")

  //   }),
  //   shippingAddressInfo: new FormGroup({
  //     email: new FormControl(""),
  //     phone: new FormControl(""),
  //     street: new FormControl(""),
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     zipCode: new FormControl("")
  //   })
  // })

  addressInfoForm = this.formbuilder.group({
    billingAddressInfo: this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: [0, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      street: [''],
      city: [''],
      state: [0],
      zipCode: [0],
      billingId: [0],
      addedDate: [new Date],
      userId: [0]
    }),
    shippingAddressInfo: this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: [0, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      street: [''],
      city: [''],
      state: [0],
      zipCode: [0],
      shippingDetailsId: [0],
      customerId: [0],
      shippingTypeId: [0],
      type: ['']
    })
  })

  loadApiData() {
    this.addressInfoForm.patchValue({
      billingAddressInfo: this.addressInfo.billingAddress,
      shippingAddressInfo: this.addressInfo.shippingAddress
    })
  }

  get testField() {
    return this.addressInfoForm.get('testField');
  }

  get subAddressInfoF() {
    return this.addressInfoForm.controls;
  }

  goPersonalInfoMethod() {
    this.sharedService.changeCheckoutStage(new CheckoutStages(true))
  }

  giveErrorMessage() {
    Swal.fire({
      title: 'Invalid Credential',
      text: 'please fill the form data properly',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Ok!',
    }).then((result) => {
    })
  }

  goDeliveryMethod() {

    if (this.isShippinAddrEqualBillAddr === false && this.subAddressInfoF.shippingAddressInfo.invalid) {
      this.giveErrorMessage();
      return;
    }

    if (this.isShippinAddrEqualBillAddr === true && this.subAddressInfoF.billingAddressInfo.invalid) {
      this.giveErrorMessage();
      return;
    }

    var addressInfo: Address = new Address();
    addressInfo.billingAddress = <BillingAddress>this.addressInfoForm.value.billingAddressInfo;
    if (this.isShippinAddrEqualBillAddr === true) {
      addressInfo.shippingAddress.city = this.addressInfoForm.value.billingAddressInfo?.city!;
      addressInfo.shippingAddress.email = this.addressInfoForm.value.billingAddressInfo?.email!;
      addressInfo.shippingAddress.phone = this.addressInfoForm.value.billingAddressInfo?.phone!;
      addressInfo.shippingAddress.state = this.addressInfoForm.value.billingAddressInfo?.state!;
      addressInfo.shippingAddress.street = this.addressInfoForm.value.billingAddressInfo?.street!;
      addressInfo.shippingAddress.zipCode = this.addressInfoForm.value.billingAddressInfo?.zipCode!;

    } else {
      addressInfo.shippingAddress = <ShippingAddress>this.addressInfoForm.value.shippingAddressInfo;

    }
    localStorage.setItem("AddressInfo", JSON.stringify(addressInfo));
    this.sharedService.changeCheckoutStage(new CheckoutStages(false, false, true, false, false))


  }




}
