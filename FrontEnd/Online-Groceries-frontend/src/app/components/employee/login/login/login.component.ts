import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultMsg?:string;

  constructor(public router:Router) { }   //DI : Dependency Injection 
                                     
	ngOnInit(): void { }

  login(loginRef:any)
  {
    let username = loginRef.eid;
    let pass = loginRef.pass;

    if(username == "admin" && pass == "admin")
    {
      this.resultMsg = "Sucess"
      this.router.navigate(["employee/panel"]);

    }
    else{
      this.resultMsg = "Wrong Input, try again"
    }   
  } 

}
