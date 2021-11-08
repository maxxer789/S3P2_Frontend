import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalRService } from './SignalR/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'Frontend';

  ngOnDestroy(): void {
    this.signalRService.hubConnection?.off("askServerResponse");
    this.signalRService.hubConnection?.off("messageRespone");
  }

  constructor(
    public signalRService:SignalRService
  ){}

  ngOnInit(): void {
    this.signalRService.startConnection();
  
    setTimeout(() => {
      this.signalRService.addMessageListener();
      this.signalRService.askServerListener();
      this.signalRService.askServer();
    }, 2000);
  }
}
