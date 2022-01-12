import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../AccountService/Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
      if(localStorage.getItem("jwt")){
        this.router.navigate(["/"])
      }
  }

  public login(form: NgForm)
  {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }
    this.accountService.login(credentials.username, credentials.password)
      .subscribe(response => 
      {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/"]).then(() =>{
          window.location.reload();
        });
      }, err => 
      {
        this.invalidLogin = true;
      })
  }

}
