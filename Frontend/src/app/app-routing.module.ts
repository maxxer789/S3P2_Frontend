import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './Gaurds/auth-gaurd.service';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'details/:id', component: PostDetailComponent },
  { path: 'group/create', component: GroupCreationComponent, canActivate: [AuthGaurdService]},
  { path: 'group/:id', component: GroupOverviewComponent, canActivate: [AuthGaurdService]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
