import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  
  private loginUrl = environment.accountUrl + "login"

  public login(username: string, password: string): Observable<string>
  {
    return this.http.post<string>(this.loginUrl, {username, password});
  }

  private registerUrl = environment.accountUrl + "Register"

  public registrate(username: string, password: string): Observable<string>
  {
    return this.http.post<string>(this.registerUrl, {username, password});
  }

}
