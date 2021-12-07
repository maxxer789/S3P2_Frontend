import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin!: boolean;
  
  constructor(private accountService: AccountService, private router: Router) { }

  public login(form: NgForm)
  {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }
    this.accountService.login(credentials.username, credentials.password)
      .subscribe(response => 
      {
        const token = (<any>response).tokenString;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/"]);
      }, err => 
      {
        console.log(err); 
        this.invalidLogin = true;
      })
  }

}
