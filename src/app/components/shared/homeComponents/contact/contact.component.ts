import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/service/shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact: Contact = new Contact();

  constructor(private contactService: ContactService) {}

  submitForm() {
    console.log(this.contact);
    this.contactService.conatactUs(this.contact).subscribe({
      next: (val: any) => {
        console.log(val);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
