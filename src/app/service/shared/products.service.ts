import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, PRODUCT_BASE_URL } from 'src/app/constants/urls';
import { Product } from 'src/app/models/Product';

import { RJResponse } from 'src/app/models/RJResponse';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/api/v1/products`);
  }

  getSingleProduct(id: any): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/api/v1/products/${id}`);
  }
  getMostBoughtProducts(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/api/v1/order/most-bought-product`);
  }
}
