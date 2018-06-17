import { Injectable } from '@angular/core';
import { HttpClient, Response   } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService  {

  API_URL  =  'http://127.0.0.1:8000';
  //API_URL  =  'https://jsonplaceholder.typicode.com';
  constructor(private  httpClient:  HttpClient) { }

  getUserAccount(){

      return  this.httpClient.get(`${this.API_URL}/user/15`,{ observe: 'response',responseType :'json' });


}
