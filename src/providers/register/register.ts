import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {
    
  }

  registerUser(fullname, email, password): Observable<any>{
    return this.http
      .post('https://ratingapi.herokuapp.com/api/signup/user', {
        fullname: fullname,
        email: email,
        password: password
      });
  }

  loginUser(email, password): Observable<any>{
    return this.http
      .post('https://ratingapi.herokuapp.com/api/login/user', {
        email: email,
        password: password
      });
  }

}
