import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
// import { BASE_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  BASE_URL = 'http://localhost:8081/api/v1/contact';

  constructor(private httpClient: HttpClient) { }

  conatactUs(contact: Contact): Observable<Object> {
    return this.httpClient.post(this.BASE_URL, contact);
  }
}
