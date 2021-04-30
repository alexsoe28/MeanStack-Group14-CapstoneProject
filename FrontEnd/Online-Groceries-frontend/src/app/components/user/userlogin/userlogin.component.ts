import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService, UserRole } from '../../../services/users/users.service'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  hidepass = true;
  constructor(public uSer:UsersService, public router:Router, private fb: FormBuilder) { }

  userLoginForm = this.fb.group({
		username: ['', [Validators.required]],
		password: ['', [Validators.required]],
	})
  ngOnInit(): void {
  }
  loginUser(){
    const username = this.userLoginForm.get("username") as FormControl;
		const password = this.userLoginForm.get("password") as FormControl;
    let credentials = {"username":username.value.toString(), "password": password.value.toString(), "role": "customer" as UserRole};
    // console.log(credentials)
		const invalid = [username, password].find(ctrl => ctrl.invalid);
		if (invalid !== undefined) {
			alert("Wrong credentials.");
		} else {
      this.uSer.signIn(credentials).subscribe(({ userId }) => {
        if (userId === undefined) {
          console.log("wrong username / password");
          alert("Wrong credentials.");
        } else {
          console.log(`logged in as userId: ${userId}`);
          localStorage.setItem("userid", userId.toString());
          this.router.navigate(["user/dashboard"]);
        }
      })
		}
    
  }
  signupRedirect(){
    this.router.navigate(["user/signup"]);
  }

}
