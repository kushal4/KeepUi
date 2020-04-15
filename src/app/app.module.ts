import { Token } from './utils/Token';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './_modal';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DivSelectButtonsComponent } from "./divInput.component";
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    SignupComponent,
    PasswordresetComponent,
    HomeComponent,
    NavbarComponent,
    NotesComponent,
    DivSelectButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    NgbModule,
    ModalModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCheckboxModule
  ],
  providers: [Token],
  bootstrap: [AppComponent]
})
export class AppModule { }
