import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalRService } from './SignalR/signal-r.service';
import { MessagingComponent } from './messaging/messaging.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Frontend';

  constructor(
    public signalRService:SignalRService
  ){}

}
