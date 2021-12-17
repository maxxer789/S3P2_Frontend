import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public sidebarOpened: boolean = false;

  public toggleSidebar()
  {
    this.sidebarOpened = !this.sidebarOpened;
  }

  constructor(){}

}
