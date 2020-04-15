
import * as jwt_decode from "jwt-decode";
export class Token{

  save(token){
    localStorage.setItem("access_token",token);
  }

  fetch(){
    return localStorage.getItem("access_token");
  }


  remove(){
    localStorage.removeItem("access_token");
  }

  decode(token=null){
    if(!token){
      token=this.fetch();
    }
    let decode_token=jwt_decode(token);
    return decode_token;
  }

}
