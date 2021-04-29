import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  unlockUser(userId:number) {
    //Ping end point with post method using user ID to unlock user
  }

  updatePassword() {
    //Post password to Db
  }

  getLockedUsers() {
    //Ping DB with get request and return locked users
  }

}
