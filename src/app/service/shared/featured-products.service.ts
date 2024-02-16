import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class FeaturedProductsService {
  constructor(private httpClient: HttpClient) {}

  getFeaturedProducts(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/api/v1/products/featured`);
  }
}
