import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}


   userLogin(username,password)
   {
     let request = {
       username:username,
       password:password
     }
    
     
     return this.http.post('http://127.0.0.1:3000/user/login',request);
   }

   userSignUp(username,password)
   {
     let request = {
      username:username,
      password:password
     }

     return this.http.post('http://127.0.0.1:3000/user/signup',request);
   }
}
