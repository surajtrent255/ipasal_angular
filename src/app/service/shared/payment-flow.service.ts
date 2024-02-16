import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RJResponse } from 'src/app/models/RJResponse';
import { ShippingRate } from 'src/app/models/ShippingRate';
import { BASE_URL, SHIPPING_RATE_INFO_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PaymentFlowService {

  constructor(private http: HttpClient) { }

  getShippingRateInfoByLocation(location: string): Observable<RJResponse<ShippingRate>> {
    let url = `${BASE_URL}/${SHIPPING_RATE_INFO_URL}/${location}`;
    return this.http.get<RJResponse<ShippingRate>>(url);
  }
}
