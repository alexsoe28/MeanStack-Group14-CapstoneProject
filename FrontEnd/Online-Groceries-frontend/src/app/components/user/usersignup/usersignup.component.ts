import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService, UserRole, UserStatus} from 'src/app/services/users/users.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  hidepass = true;
  hiderepass = true;
  msg:string = "";
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(public router:Router, private fb:FormBuilder, public uSer:UsersService) { }

  userSignupForm = this.fb.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    dob: ['', [Validators.required]],
		uname: ['', [Validators.required]],
		password: ['', [Validators.required]],
    repassword: ['', [Validators.required]],
	})
  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  registerUser(){
    const firstname = this.userSignupForm.get("fname") as FormControl;
    const lastname = this.userSignupForm.get("lname") as FormControl;
    const dateofbirth = this.userSignupForm.get("dob") as FormControl;
    const username = this.userSignupForm.get("uname") as FormControl;
		const password = this.userSignupForm.get("password") as FormControl;
    const repassword = this.userSignupForm.get("repassword") as FormControl;
    if(password.value == repassword.value){
      let conatct = {
        "firstname":firstname.value.toString(),
        "lastname":lastname.value.toString(),
        "dob": dateofbirth.value
      }
      let user  = {        
        "role": "customer" as UserRole,
        "status": "normal" as UserStatus,
        "username": username.value.toString(),
        "password": password.value.toString(),
        "contact": conatct
      };
      this.uSer.addUser(user);
      this.router.navigate(["user/login"]);
    }else{
      alert("Passwords do not match")
    }
  }

  loginRedirect(){
    this.router.navigate(["user/login"]);
  }
}
