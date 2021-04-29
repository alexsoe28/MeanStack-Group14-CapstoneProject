import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ipAddress:string="";

  constructor(public http:HttpClient) { }

  unlockUser(userId:number) {
    return this.http.post(this.ipAddress+"/unlockUserById", userId, {responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  updatePassword() {
    //Post password to Db
  }

  getLockedUsers() {
    //Ping DB with get request and return locked users
  }

}
