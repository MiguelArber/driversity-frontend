import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  private  account:  Array<object> = []
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getUserAccount();
  }

  public getUserAccount(){
    this.apiService.getUserAccount().subscribe((data:  Array<object>) => {
        this.account  =  data;
        console.log(data);
    });
}

}
