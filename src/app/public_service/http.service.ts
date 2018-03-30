import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  serverip = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getData(url){
    return this.http.get(this.serverip + url);
  }
}
