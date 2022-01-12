import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../AccountService/Account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  invalidRegistration!: boolean;
  
  constructor(private accountService: AccountService, private router: Router) { }

  public register(form: NgForm)
  {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }
    this.accountService.registrate(credentials.username, credentials.password)
      .subscribe(response => 
      {
        this.invalidRegistration = false;
        this.router.navigate(["/login"]);
      }, err => 
      {
        this.invalidRegistration = true;
      })
  }
}
