import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login={
    username:null,
    password:null
  };
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.login);
  }

}
