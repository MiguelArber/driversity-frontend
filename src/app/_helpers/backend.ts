import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    userObj
    constructor(
      private http: HttpClient,
    ) { }



    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        console.log(users);
        interface UserResponse {
          user: {
            username: string;
            id: string;
          }

        }
        // wrap in delayed observable to simulate server api call
         return of(null).pipe(mergeMap(() => {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {

            var body = "&username=" + request.body.username + "&password=" + request.body.password;
            var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

            this.http.post<UserResponse>('http://127.0.0.1:8000/login', body,{ headers: reqHeader })
             .subscribe(
                 data =>  this.userObj = data
               );
             if(this.userObj.user.username == request.body.username){
                 let response = {
                       id: this.userObj.user.id,
                       username: this.userObj.user.username,
                       token: 'fake-jwt-token'
                   };
                 console.log("Usuario valido");
                 return of(new HttpResponse({ status: 200, body: response }));
             }
             else{
                 console.log("Usuario invalido");
                 return throwError({ error: { message: 'Username or password is incorrect' } });
               }

            }

            //get users
            if (request.url.endsWith('/match') && request.method === 'GET') {
            console.log("Esta en match");
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') !== 'Bearer fake-jwt-token') {

                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            // if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
            //     // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            //     if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //         // find user by id in users array
            //         let urlParts = request.url.split('/');
            //         let id = parseInt(urlParts[urlParts.length - 1]);
            //         let matchedUsers = users.filter(user => { return user.id === id; });
            //         let user = matchedUsers.length ? matchedUsers[0] : null;
            //
            //         return of(new HttpResponse({ status: 200, body: user }));
            //     } else {
            //         // return 401 not authorised if token is null or invalid
            //         return throwError({ error: { message: 'Unauthorised' } });
            //     }
            // }

            // register user
            // if (request.url.endsWith('/users/register') && request.method === 'POST') {
            //     // get new user object from post body
            //     let newUser = request.body;
            //
            //     // validation
            //     let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
            //     if (duplicateUser) {
            //         return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
            //     }
            //
            //     // save new user
            //     newUser.id = users.length + 1;
            //     users.push(newUser);
            //     localStorage.setItem('users', JSON.stringify(users));
            //
            //     // respond 200 OK
            //     return of(new HttpResponse({ status: 200 }));
            // }

            // delete user
            // if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
            //     // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            //     if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //         // find user by id in users array
            //         let urlParts = request.url.split('/');
            //         let id = parseInt(urlParts[urlParts.length - 1]);
            //         for (let i = 0; i < users.length; i++) {
            //             let user = users[i];
            //             if (user.id === id) {
            //                 // delete user
            //                 users.splice(i, 1);
            //                 localStorage.setItem('users', JSON.stringify(users));
            //                 break;
            //             }
            //         }
            //
            //         // respond 200 OK
            //         return of(new HttpResponse({ status: 200 }));
            //     } else {
            //         // return 401 not authorised if token is null or invalid
            //         return throwError({ error: { message: 'Unauthorised' } });
            //     }
            // }

            // pass through any requests not handled above
            return next.handle(request);

          }))

          // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(materialize())
          .pipe(delay(500))
          .pipe(dematerialize());


    }
}

export let BackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
};
