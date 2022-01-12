import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from '../Models/IGroup';
import { SignalRService } from '../SignalR/signal-r.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, OnDestroy {

  @Input() group: Group = {} as Group;
  activeUserId: number = 0;

  constructor(
    public signalRService:SignalRService,
    public jwtHelper: JwtHelperService
    ){}

    ngOnInit()
    {
      const token = localStorage.getItem("jwt");
      this.activeUserId = this.jwtHelper.decodeToken(token!).subject;
      this.signalRService.startConnection();
    
      setTimeout(() => {
        this.signalRService.addMessageListener();
        this.signalRService.askServerListener();
        this.signalRService.askServer();
        this.joinGroup();
      }, 2000);
    }

  ngOnDestroy(): void 
  {
    this.signalRService.hubConnection?.off("askServerResponse");
    this.signalRService.hubConnection?.off("messageRespone");
  }

  public joinGroup(): void 
  {
    this.signalRService.joinGroup(this.group.id.toString());
  }

  public sendMessageToGroup(form: NgForm): void
  {
    const messageInfo = {
      'message': form.value.message,
      'groupName': this.group.id.toString()
    }
    this.signalRService.sendMessage(messageInfo);
  }

}
