import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    "canActivate":[AuthGuard]
  },
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
   },
  {
    path:"sign-up",
    component:SignupComponent,
    "canActivate":[AuthGuard]
  },
  {
    path:"password-reset",
    component:PasswordresetComponent
  },
  {
    path:"home",
    component:HomeComponent,
    "canActivate":[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
