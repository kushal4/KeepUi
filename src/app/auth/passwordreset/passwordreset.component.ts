import { Token } from './../../utils/Token';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/User';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})
export class PasswordresetComponent implements OnInit {
  resetModel:UserLogin={
    username:null,
    password:null
  };
  errorMsg:UserLogin=null;
  genericError=null;
  constructor(private authService:AuthService,private router:Router,private tokenObj:Token) { }

  ngOnInit(): void {
  }

  async reset(){
    this.errorMsg=null;
    this.genericError=null;
    try{
      let user_obj=await this.authService.reset(this.resetModel);
      let token=user_obj["access_token"];
      this.tokenObj.save(token);
      this.router.navigate(["/home"]);
    }catch(error_response){
        if(error_response["errors"]){
          this.errorMsg=error_response["errors"];
        }else{
            this.genericError=error_response["message"];
        }
    }
  }

}
