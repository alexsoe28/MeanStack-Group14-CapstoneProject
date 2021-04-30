import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-userpanel',
	templateUrl: './userpanel.component.html',
	styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

	constructor(public router: Router) { }

	ngOnInit(): void {
	}
	loginRedirect() {
		this.router.navigate(["user/login"]);
	}
	userPanelRedirect(location: string) {
		if (location == 'Shop') {
			this.router.navigate(["user/browseShop"]);
		}
		else if (location == 'Cart') {
			this.router.navigate(["user/browseShop/myCart"]);
		}
		else if (location == 'EditProfile') {
			this.router.navigate(["user/editProfile"]);
		}
	}
}
