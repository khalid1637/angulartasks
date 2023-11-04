import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = `https://1.api.fy23ey05.careers.ifelsecloud.com/`


  constructor(private http: HttpClient) {
  }


  getdata () {
   return this.http.get(this.url)
  }


}
