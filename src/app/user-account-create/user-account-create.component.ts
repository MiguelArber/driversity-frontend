import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';

@Component({
  selector: 'app-user-account-create',
  templateUrl: './user-account-create.component.html',
  styleUrls: ['./user-account-create.component.css']
})
export class UserAccountCreateComponent implements OnInit {

  constructor(private  apiService:  APIService) { }

  ngOnInit() {
  }

  createUserAccount(){

var  user  = {
    userName:  "tomas",
    password:  "123456",
    email:  "tomass@email.com",
    vehicle:  "Seat"

};
this.apiService.createUserAccount(user).subscribe((response) => {
    console.log(response);
});


}
