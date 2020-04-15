import { Token } from './../../utils/Token';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel:UserLogin={
    username:null,
    password:null
  };
  errorMsg:UserLogin=null;
  constructor(private authService:AuthService,private router:Router,private tokenObj:Token) { }

  ngOnInit(): void {
  }

  async save(){
    this.errorMsg=null;
    try{
      let user_obj=await this.authService.login(this.loginModel);
      console.log(user_obj);
      let token=user_obj["access_token"];
        this.tokenObj.save(token);
        this.router.navigate(["/home"]);
    }catch(err_response){
        console.log(err_response);
        this.errorMsg=err_response["errors"];
        console.log(this.errorMsg);
    }

  }

}
