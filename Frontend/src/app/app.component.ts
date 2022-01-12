import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public loggedIn: boolean = false;

  public sidebarOpened: boolean = false;

  public toggleSidebar()
  {
    this.sidebarOpened = !this.sidebarOpened;
  }

  constructor(){}

  ngOnInit(): void {
      this.loggedIn = localStorage.getItem("jwt") ? true : false;
  }

  public logout(){
    localStorage.removeItem("jwt");
    this.loggedIn = true;
    window.location.reload();
  }
}
