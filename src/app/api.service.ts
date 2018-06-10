import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService  {

  //API_URL  =  'http://driveristy.test:8000';
  API_URL  =  'https://jsonplaceholder.typicode.com';
  constructor(private  httpClient:  HttpClient) { }

  getUserAccount(){
      return  this.httpClient.get(`${this.API_URL}/posts/1`);
      //return  this.httpClient.get(`${this.API_URL}/user/15`);
  }
  // createUserAccount(user){
  //   //return  this.httpClient.post(`${this.API_URL}/user/new/`,user);
  // }

}
