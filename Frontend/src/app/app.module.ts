import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MessagingComponent } from './messaging/messaging.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    MessagingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
