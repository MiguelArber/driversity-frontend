import { Component, OnInit } from '@angular/core';
import { APIService  } from  '../api.service';

@Component({
  selector: 'app-user-account-create',
  templateUrl: './user-account-create.component.html',
  styleUrls: ['./user-account-create.component.css']
})
export class UserAccountCreateComponent implements OnInit {

  constructor(private  apiService:  APIService ) { }

  ngOnInit() {
  }

  // createUserAccount(){
  //
  //   var  user  = {
  //       "username": "armendariz.sergio",
  //       "email": "gonzalo60@zayas.es",
  //       "password": "hN<nZY,fi&-0mdfl'KR^",
  //       "timeFlex": 4,
  //       "locationFlex": 292,
  //       "origin": {
  //         "lat": 40.385858,
  //         "lon": -3.719119,
  //         "locationName": "Calle de la Via, 27, 28019 Madrid, Spain",
  //         "isCampus": false
  //         },
  //       "vehicle": {
  //         "type": "coche",
  //         "seats": 2,
  //         "model": "Seat",
  //         "price": 5
  //         },
  //       "schedule": {},
  //       "campus": {
  //         "lat": 40.385858,
  //         "lon": -3.719119,
  //         "locationName": "Calle de la Via, 27, 28019 Madrid, Spain",
  //         "isCampus": false
  //         }
  //   };
  //
  //   this.apiService.createUserAccount(user).subscribe((response) => {
  //       console.log(response);
  //   });
  //
  // }
}
