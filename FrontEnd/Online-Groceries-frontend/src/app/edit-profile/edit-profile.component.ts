import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  updateMsg?:String = "";

  constructor(public userService:UsersService, public router:Router) { }

  ngOnInit(): void {
  }

  changePassword(updateProfile: any) {
    if (updateProfile.updatedPass == updateProfile.updatedPass2) {
      let userDetails = {
        userId: updateProfile.userId,
        password: updateProfile.updatedPass
      };
      this.userService.updateUserDetails(userDetails);
      this.updateMsg = "Password successfully updated!";
    }
    else {
      this.updateMsg = "Password was unable to be updated :(";
    }
    
  }

  logOut() {
    this.router.navigate(["employee/login"]);
  }

}
