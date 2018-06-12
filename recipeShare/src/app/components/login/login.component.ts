import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

private username;
private password;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }


  signIn()
  {
    this.auth.userLogin(this.username,this.password).subscribe((data)=>{
        localStorage.setItem('recipeToken',data.toString());
        this.router.navigate(['/list'])
    });
  }

  signUp()
  {
    this.auth.userSignUp(this.username,this.password).subscribe((data)=>{
      console.log(data);
    });
  }

}
