import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private httpclient:HttpClient) { }
  getbusiness(): Observable<any> {
    return this.httpclient.get('localhost:8000/api/business')

  }
}
