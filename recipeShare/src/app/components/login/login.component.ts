import { Component, OnInit } from '@angular/core';
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

private username;
private password;
private showErr:Boolean=true;
private ErrorMessage:String;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }


  signIn()
  {
    this.auth.userLogin(this.username,this.password).subscribe((data)=>{
        localStorage.setItem('recipeToken',data.toString());
        this.router.navigate(['/list'])
    },
    err=>{
      this.ErrorMessage=err.error;
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
    }
  )
    
  }

  signUp()
  {
    this.auth.userSignUp(this.username,this.password).subscribe((data)=>{
      console.log(data);
    },
    err=>{
      this.ErrorMessage=err.error;
      this.showErr = false;
      setTimeout(()=>this.showErr=true,3000);
    }
    );
  }

}
