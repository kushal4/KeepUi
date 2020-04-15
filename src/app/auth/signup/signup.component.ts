import { Token } from './../../utils/Token';
import { UserRegister } from './../../models/User';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpModel:UserRegister={
    username:null,
    email:null,
    password:null
  };
  errorMsg:UserRegister=null;
  genericError=null
  constructor(private authService:AuthService,private router:Router,private tokenObj:Token) { }

  ngOnInit(): void {
  }

  async register(){
    this.errorMsg=null;
    this.genericError=null;
    try{
      let user_obj=await this.authService.signup(this.signUpModel);
      if(user_obj){
        let token=user_obj["access_token"];
        this.tokenObj.save(token);
        this.router.navigate(["/home"]);
      }
    }catch(error_response){
        if(error_response["errors"]){
          this.errorMsg=error_response["errors"];
        }else{
            this.genericError=error_response["message"];
        }
    }

  }

}
