import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  hidepass = true;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    // sessionStorage.setItem("token", "123");
    this.router.navigate(["user/dashboard"]);
  }
  signupRedirect(){
    this.router.navigate(["user/signup"]);
  }

}
