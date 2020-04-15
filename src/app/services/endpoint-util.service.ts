import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointUtilService {

  constructor(private http:HttpClient) { }

   call_post(user_obj,endpoint_url){
    return new Promise((resolve,reject)=>{
      this.http.post(endpoint_url,user_obj).subscribe(response=>{
            if(response["code"]==200){
              resolve(response);
            }else{
              //console.log("rejecting");
              reject(response);
            }
      })
    })
   }

    call_get(endpoint_url,url_query_parms=null){
      return new Promise((resolve,reject)=>{
        this.http.get(endpoint_url).subscribe(response=>{
          if(response["code"]==200){
            resolve(response);
          }else{
            //console.log("rejecting");
            reject(response);
          }
    });
      });
   }

   call_put(endpoint_url,param_obj={}){
      return new Promise((resolve,reject)=>{
          this.http.put(endpoint_url,param_obj).subscribe(response=>{
            if(response["code"]==200){
              resolve(response);
            }else{
              //console.log("rejecting");
              reject(response);
            }
          });
      });
   }
}
