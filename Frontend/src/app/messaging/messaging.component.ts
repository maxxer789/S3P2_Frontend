import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignalRService } from '../SignalR/signal-r.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, OnDestroy {

currentGroup : string = "";

  constructor(
    public signalRService:SignalRService
    ){}

    ngOnInit()
    {
      this.signalRService.startConnection();
    
      setTimeout(() => {
        this.signalRService.addMessageListener();
        this.signalRService.askServerListener();
        this.signalRService.askServer();
      }, 2000);
    }

  ngOnDestroy(): void 
  {
    this.signalRService.hubConnection?.off("askServerResponse");
    this.signalRService.hubConnection?.off("messageRespone");
  }

  public joinGroup(form: NgForm): void 
  {
    this.signalRService.joinGroup(form.value.groupName);
    this.currentGroup = form.value.groupName;
  }

  public sendMessageToGroup(form: NgForm): void
  {
    const messageInfo = {
      'message': form.value.message,
      'groupName': this.currentGroup
    }
    this.signalRService.sendMessage(messageInfo);
  }

}
