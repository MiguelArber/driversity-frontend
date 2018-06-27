import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient,HttpHeaders   } from  '@angular/common/http';

import { AlertService, UserService } from '../_services';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private  httpClient:  HttpClient,
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({

            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', ''],
            timeFlex: ['', ''],
            locationFlex: ['', ''],
            lat: ['', ''],
            lon: ['', ''],
            locationName: ['', ''],
            type: ['', ''],
            model: ['', ''],
            seats: ['', ''],
            price: ['', ''],
            campus: ['', '']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var body = "&username=" + this.registerForm.controls.username.value + "&email=" + this.registerForm.controls.email.value + "&password=" + this.registerForm.controls.password.value + "&timeFlex=" + this.registerForm.controls.timeFlex.value + "&locationFlex=" + this.registerForm.controls.locationFlex.value + "&lat=" + this.registerForm.controls.lat.value
        + "&lon=" + this.registerForm.controls.lon.value + "&locationName=" + this.registerForm.controls.locationName.value + "&type=" + this.registerForm.controls.type.value + "&model=" + this.registerForm.controls.model.value + "&seats=" + this.registerForm.controls.seats.value + "&price=" + this.registerForm.controls.price.value + "&campus=" + this.registerForm.controls.campus.value;
        this.httpClient.post("http://127.0.0.1:8000/user/new", JSON.stringify(body),{ headers: reqHeader }).subscribe((data) => {


          this.userService.register(this.registerForm.value);

          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },error => {
          this.alertService.error(error);
          this.loading = false;
          });


    }
}
