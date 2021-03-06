import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//ec2-52-202-100-255.compute-1.amazonaws.com
  constructor(private http:HttpClient) {}


   userLogin(username,password)
   {
     let request = {
       username:username,
       password:password
     }
    
     
     return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/user/login',request);
   }

   userSignUp(username,password)
   {
     let request = {
      username:username,
      password:password
     }

     return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/user/signup',request);
   }

   isUserLoggedIn()
   {
     if(localStorage.getItem('recipeToken')!=null)
     {
       console.log(localStorage.getItem('recipeToken'));
       return true;
     }
     else
     {
      console.log(localStorage.getItem('recipeToken'));
      console.log('false');
       return false;
     }
   }
}
