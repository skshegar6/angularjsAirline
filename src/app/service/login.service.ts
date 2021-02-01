import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin:boolean = false;
  eventSubject = new Subject<object>();
  constructor() { }

  setLoginedIn(){
    this.isLogin = true;
    return this.isLogin;
  }

  setLogOut(){
    this.isLogin =false;
    return this.isLogin;
  }

  checkingUserAdmin(){
    return this.eventSubject;
  }

  checkingUserStaff(userData:any){
    let staffDetails={"username":"staff","password":"staff@123"}
    if(staffDetails.username == userData.username && staffDetails.password == userData.Password){
      return this.setLoginedIn();
    }else{
      return false;
    }
  }
}
