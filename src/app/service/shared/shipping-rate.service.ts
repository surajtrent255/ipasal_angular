import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, SHIPPING_RATE_INFO_URL } from 'src/app/constants/urls';
import { RJResponse } from 'src/app/models/RJResponse';
import { ShippingRate } from 'src/app/models/ShippingRate';

@Injectable({
  providedIn: 'root'
})
export class ShippingRateService {

  getShippingRateInfoByLocation(location: string): Observable<RJResponse<ShippingRate>> {
    let url = `${BASE_URL}/${SHIPPING_RATE_INFO_URL}/${location}`;
    console.log(url);
    return this.http.get<RJResponse<ShippingRate>>(url);
  }

  constructor(private http: HttpClient) {

  }
}
