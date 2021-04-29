import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  loginRedirect(){
    this.router.navigate(["user/login"]);
  }
}
