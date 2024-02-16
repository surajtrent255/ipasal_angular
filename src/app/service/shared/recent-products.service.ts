import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class RecentProductsService {
  constructor(private httpClient: HttpClient) {}

  getRecentProducts(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/api/v1/products`);
  }
}
