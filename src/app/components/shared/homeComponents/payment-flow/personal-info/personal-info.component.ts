import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { CheckoutStages } from '../models/PaymentStages';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {


  user: User = new User();
  isFormSubmitable: boolean = false;

  ngOnInit() {
    let prevUserData = JSON.parse(localStorage.getItem("PersonalUserInfo")!);
    if (prevUserData !== null) {
      this.user = prevUserData;
    }
  }

  constructor(private sharedService: SharedService) { }

  submitForm() {
    // paymentStage.personalStage=false;
    this.sharedService.changeCheckoutStage(new CheckoutStages(false, true, false, false, false))
    localStorage.setItem("PersonalUserInfo", JSON.stringify(this.user));
  }
}
