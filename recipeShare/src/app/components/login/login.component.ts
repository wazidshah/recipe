import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { timeout } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

username;
password;
showErr:Boolean=true;
ErrorMessage:String;
errorClass:string;
@ViewChild('usernameEle') usernameEle:ElementRef;
@ViewChild('passwordEle') passwordEle:ElementRef;


  constructor(private auth:AuthService,private router:Router) { }
  
  ngOnInit() {
    if(this.auth.isUserLoggedIn)
    {
      this.router.navigate(["/list"]);
    }
    console.log(this.usernameEle);
  }


  signIn()
  {
    this.auth.userLogin(this.username,this.password).subscribe((data)=>{
        localStorage.setItem('recipeToken',data.toString());
        this.router.navigate(['/list'])
    },
    err=>{
      this.errorClass = "alert-danger";
      this.ErrorMessage=err.error;
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
    }
  )
    
  }

  signUp()
  {
    if(!this.usernameEle.nativeElement.validity.valid)
    {
      this.errorClass = "alert-danger";
      this.ErrorMessage="Invalid User Name";
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
      return;
    }

    if(!this.passwordEle.nativeElement.validity.valid)
    {
      this.errorClass = "alert-danger";
      this.ErrorMessage="Invalid Password";
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
      return;
    }

    this.auth.userSignUp(this.username,this.password).subscribe((data)=>{
      this.errorClass = "alert-success";
      this.ErrorMessage="User Created";
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
    },
    err=>{
      this.errorClass = "alert-danger";
      this.ErrorMessage=err.error;
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
    }
    );
  }

}
