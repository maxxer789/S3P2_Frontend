import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  lastMessage:string = "";

  constructor() { }

  hubConnection?:signalR.HubConnection;

  startConnection = () => 
  {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/Messages', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).build();

      this.hubConnection.start()
        .then(() => {
          console.log("Connection online!");
        })
        .catch(err => console.log("Something went wrong: " + err));
  }

  askServer()
  {
    this.hubConnection?.invoke("askServer", "hey")
    .catch(err => console.error(err));
  }

  addMessageListener()
  {
    this.hubConnection?.on("messageRespone", (message) => {
      this.lastMessage = message;
      console.log(message);
    })
  }

  askServerListener()
  {
    this.hubConnection?.on("askServerResponse", (sometext) => {
      console.log(sometext);
      this.lastMessage = sometext;
    })
  }
}
