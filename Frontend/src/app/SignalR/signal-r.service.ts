import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  lastMessage:string = "";

  constructor() { }

  hubConnection?:signalR.HubConnection;

  public startConnection = () => 
  {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5002/Messages', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).build();

      this.hubConnection.start()
        .then(() => {
          console.log("Connection online!");
        })
        .catch(err => console.log("Something went wrong: " + err));
  }

  public askServer()
  {
    this.hubConnection?.invoke("askServer", "hey")
    .catch(err => console.error(err));
  }

  public addMessageListener()
  {
    this.hubConnection?.on("groupsMessage", (message) => {
      this.lastMessage = message;
      console.log(message);
    })
  }

  public joinGroup(groupName: string)
  {
    this.hubConnection?.invoke("JoinGroup", groupName);
  }

  public sendMessage(messageInfo: any)
  {
    this.hubConnection?.invoke("SendMessageToGroup", messageInfo.groupName, messageInfo.message);
  }

  public askServerListener()
  {
    this.hubConnection?.on("askServerResponse", (sometext) => {
      console.log(sometext);
      this.lastMessage = sometext;
    })
  }
}
