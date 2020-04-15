import { EndpointUtilService } from './endpoint-util.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private endpoint:EndpointUtilService) {

   }

    async login(user_obj){
      const login_url=`${environment.apiUrl}/api/users/login`;
      return await this.endpoint.call_post(user_obj,login_url);
   }



 async  signup(user_obj){
      const signup_url=`${environment.apiUrl}/api/users/register`;
      return await this.endpoint.call_post(user_obj,signup_url);
   }

   async reset(user_obj){
    const reset_url=`${environment.apiUrl}/api/users/reset`;
    return await this.endpoint.call_post(user_obj,reset_url);
   }




}
