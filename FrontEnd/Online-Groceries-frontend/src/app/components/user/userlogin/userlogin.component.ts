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
  msg:string = "";
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
      this.uSer.signIn(credentials).subscribe((data) => {
        if(this.uSer.loginAttempts <= 3){
          if (data.userId === undefined) {
            console.log("wrong username / password");
            alert("Wrong credentials.");
            this.uSer.loginAttempts += 1;
          } else {
            if(data.status == "normal"){
              console.log(`logged in as userId: ${data.userId}`);
              localStorage.setItem("userid", data.userId.toString());
              this.router.navigate(["user/dashboard"]);
            }
            else{
              this.msg = "Your account is currently locked due to too many incorrect attempts";
            }
          }
        }
        else{
          this.uSer.lockUser(username.value.toString())
          this.msg = "Your account is currently locked due to too many incorrect attempts";
        }
      })
		}
    
  }
  signupRedirect(){
    this.router.navigate(["user/signup"]);
  }

}
