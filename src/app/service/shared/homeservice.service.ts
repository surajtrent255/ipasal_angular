import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, CATEGORY_BASE_URL } from 'src/app/constants/urls';
import { Category } from 'src/app/models/Category';
import { RJResponse } from 'src/app/models/RJResponse';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductCategoriesService {

  constructor(private http:HttpClient) { }

  getFeaturedCategories(): Observable<RJResponse<Category[]>>{
    let url = `${BASE_URL}${CATEGORY_BASE_URL}/featured`;
    console.log("*************" +url)
    return this.http.get<RJResponse<Category[]>>(`${BASE_URL}${CATEGORY_BASE_URL}/featured`)
  }
  // http://localhost:8080/api/v1/products/featured
  // getFeaturedProducts():Observable<RJResponse<

}
