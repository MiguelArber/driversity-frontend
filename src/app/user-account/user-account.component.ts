import { Component, OnInit } from '@angular/core';
import { APIService  } from  '../api.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

// interface User {
//     username: string;
//     email: string;
// }

export class UserAccountComponent implements OnInit {

  // private  user:  Array<any> = [];
  // public user : Array<object> = [];
  constructor(private  apiService:  APIService ) { }

  ngOnInit() {
    this.getUserAccount();
  }

  public getUserAccount(){

    // this.apiService.getUserAccount().subscribe(res => {
    //     this.user = res.body.user;
    //  	      console.log(this.user);
    // 	      // console.log(res.headers.get('Content-Type'));
    //   },
    //   err => {
	  //     console.log(err);
    //   });

}

}
