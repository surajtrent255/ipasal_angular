import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  payByKhalti(payload: any): Observable<any> {
    return this.http.post("http://localhost:8081/api/v1/payment/", payload);
  }
}
