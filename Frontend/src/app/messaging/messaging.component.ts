import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalRService } from '../SignalR/signal-r.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, OnDestroy {

message:string = "";

  constructor(
    public signalRService:SignalRService
    ){}

    ngOnInit()
    {
      this.signalRService.startConnection();
  
      setTimeout(() => {
        this.signalRService.askServerListener();
        this.signalRService.askServer();
      }, 2000);
      this.signalRService.addMessageListener();
    }

  ngOnDestroy(): void 
  {
    this.signalRService.hubConnection?.off("askServerResponse");
  }

}
