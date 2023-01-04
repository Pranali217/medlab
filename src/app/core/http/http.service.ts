import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string=" http://localhost:3000/";

  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set('content-type','application/json');



  constructor(private http:HttpClient) { }

  getDetailsFromServer(endPoint: string, httpParams: HttpParams = new HttpParams()){
    let url = this.baseUrl+endPoint;
    return this.http.get(url,{ 'headers': this.httpHeaders, 'params': httpParams});
  }
}
