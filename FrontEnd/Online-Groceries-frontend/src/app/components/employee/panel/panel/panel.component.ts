import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

	constructor(public router: Router) { }

  ngOnInit(): void {
  }

	loginRedirect() {
		this.router.navigate(["user/login"]);
	}
	userPanelRedirect(location: string) {
		if (location == 'SendRequest') {
			this.router.navigate(["employee/sendRequest"]);
		}
		// else if (location == 'Cart') {
		// 	this.router.navigate(["user/browseShop/myCart"]);
		// }
		// else if (location == 'EditProfile') {
		// 	this.router.navigate(["user/editProfile"]);
		// }
		// else if (location == 'AddFunds') {
		// 	this.router.navigate(["user/addFunds"]);
		// }
	}
}
