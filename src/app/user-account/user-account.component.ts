import { Component, OnInit } from '@angular/core';
import { APIService  } from  '../api.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  private  contacts:  Array<object> = [];
  constructor(private  apiService:  APIService ) { }

  ngOnInit() {
    this.getUserAccount();
  }

  public getUserAccount(){

    this.apiService.getUserAccount().subscribe(res => {
	      this.account = res.body.user;
     	      console.log(this.account);
    	      console.log(res.headers.get('Content-Type'));
      },
      err => {
	      console.log(err);
      });

}

}
