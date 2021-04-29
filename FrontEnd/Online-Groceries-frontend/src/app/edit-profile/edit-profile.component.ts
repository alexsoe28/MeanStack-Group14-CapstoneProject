import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public userService:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  changePassword(/*form: any*/) {
    // this.userService.checkPassword(password).subscribe((result:string) => {
    // });
    // this.userService.updatePassword(password).subscribe((result:string) => {
    // });
  }

  logOut() {
    this.router.navigate(["employee/login"]);
  }

}
