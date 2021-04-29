import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  changePassword(/*form: any*/) {
    // this.userService.checkPassword(password).subscribe((result:string) => {
    // });
    // this.userService.updatePassword(password).subscribe((result:string) => {
    // });
  }

}
