import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  base_url = 'http://localhost:8081/api/v1/slider';

  constructor(private httpClient: HttpClient) { }

  getSliderContent(): Observable<any> {
    return this.httpClient.get(this.base_url);
  }
}
