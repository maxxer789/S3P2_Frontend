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
import { MatTabsModule} from '@angular/material/tabs'
import { JwtModule } from '@auth0/angular-jwt';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { GroupSettingsComponent } from './group-settings/group-settings.component';
import { RegistrationComponent } from './registration/registration.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    MessagingComponent,
    LoginComponent,
    GroupOverviewComponent,
    GroupCreationComponent,
    GroupSettingsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    SidebarModule.forRoot(),
    JwtModule.forRoot({
      config:
      {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
