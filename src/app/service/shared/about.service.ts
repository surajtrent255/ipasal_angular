import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  base_url = 'http://localhost:8081/api/v1/about';

  constructor(private httpClient: HttpClient) { }

  getAboutContent(): Observable<any> {
    return this.httpClient.get(this.base_url);
  }


}
